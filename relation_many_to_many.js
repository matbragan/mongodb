// collection people
db.people.insertMany([
    {name: 'Matheus', idade: 25, occupation: 'Data Engineer'},
    {name: 'Vinicius', idade: 23, occupation: 'Back-end'},
    {name: 'Arthur', idade: 28, occupation: 'Front-end'}
]);

// collection courses
db.courses.insertMany([
    {name: 'Advanced JavaScript', abbreviation: 'js'},
    {name: 'Advanced Python', abbreviation: 'py'},
    {name: 'Database Administrator', abbreviation: 'dba'}
]);

// constants for relation many to many
const matheusId = db.people.findOne({name: 'Matheus'})._id;

const viniciusId = db.people.findOne({name: 'Vinicius'})._id;

const arthurId = db.people.findOne({name: 'Arthur'})._id;

const jsId = db.courses.findOne({abbreviation: 'js'})._id;

const pyId = db.courses.findOne({abbreviation: 'py'})._id;

const dbaId = db.courses.findOne({abbreviation: 'dba'})._id;

// collection course_person - relation many to many
db.course_person.insertMany([
    {course_id: jsId, person_id: viniciusId},
    {course_id: jsId, person_id: arthurId},
    {course_id: pyId, person_id: matheusId},
    {course_id: pyId, person_id: viniciusId},
    {course_id: dbaId, person_id: matheusId}
]);

// students in JavaScript course
const jsStudents = [];

db.course_person.find({course_id: jsId}).forEach(function(student){
    jsStudents.push(student.person_id)
});

db.people.find({_id: {$in: jsStudents}});