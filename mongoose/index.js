// * mongodb connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
// , {useNewUrlParser: true, useUnifiedTopology: true}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('We are connected to MongoDB!');
});

// * create schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  occupation: String,
  type: String
});

// * create model (collection)
const Person = mongoose.model('Person', personSchema);

// * insert data (document)
const matheus = new Person({
  name: 'Matheus',
  age: 25,
  occupation: 'DBA'
});
// matheus.save();

// * find one data 
// Person.findOne({ name: 'Matheus' })
//   .then(function (person) {
//     console.log(person);
// });

// * insert many data (documents)
// Person.insertMany([
//   {name: 'Milena', age: 22},
//   {name: 'Pinguito', type: 'cat'}
// ]);

// * find all data
async function getPeople() {
  const people = await Person.find({}).exec();
  console.log(people);
};

// getPeople();

// * delete data
async function getPerson(name) {
  const person = await Person.find({ name: name }).exec();
  if(person.length == 0) {
    console.log('This person does not exist');
  } else {
    console.log(person);
  }
};

// Person.deleteOne({ name: 'Pinguito' }).exec();
// Person.deleteMany({ name: 'Milena' }).exec();

// getPerson('Pinguito');

// * update data
// Person.updateOne({ name: 'Matheus' }, { occupation: 'Analytics Engineer' }).exec();

// getPeople();

// * using where
async function getPersonNameAge(name, age) {
  const person = await Person
                        .where('age').gte(age)
                        .where('name', name)
                        .exec();

  if(person == 0) {
    console.log('This person does not exist');
  } else {
    console.log(person);
  }
};

getPersonNameAge('Matheus', 26)