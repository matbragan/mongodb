// mongodb connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
// , {useNewUrlParser: true, useUnifiedTopology: true}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('We are connected to MongoDB!');
});

// create schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  occupation: String
});

// create model (collection)
const Person = mongoose.model('Person', personSchema);

// insert data (document)
const matheus = new Person({
  name: 'Matheus',
  age: 25,
  occupation: 'DBA'
});
// matheus.save();

// find data 
Person.findOne({ name: 'Matheus' })
  .then(function (person) {
    console.log(person);
  });