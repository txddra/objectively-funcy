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
return person.firstName = newName;
}

/*---*/

const setAge = function(person, newAge){
return person.age = newAge;
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
