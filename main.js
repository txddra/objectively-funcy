// Your code here.
const getFirstName = function(person){
return person.firstName
}

/*---*/

const getLastName = function(person){
return person.lastName
}

/*---*/

const getFullName = function(person){
return `${person.firstName} ${person.lastName}` 
}

/*---*/

const setFirstName = function(person, newName){
person.firstName = newName;
}

/*---*/

const setAge = function(person, newAge){
person.age = newAge;
}

/*---*/

const giveBirthday = function(person){
if('age' in person){
  person.age = person.age + 1 
}
else {
  person.age = 1
}

}


/*---*/

const marry = function(person,person1){
  person.married= true,
  person1.married=true,

  person.spouseName =getFullName(person1),
  person1.spouseName = getFullName(person)
}

/*---*/

const divorce =function(person, person1){
person.married = false,
person1.married = false
}


// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
