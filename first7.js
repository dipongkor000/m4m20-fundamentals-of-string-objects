const person = {
    name: 'salam uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav Place': ['bandarban','saintmartin','kuakata','sundorbon']
}
// console.log(person);

//dot notation
// console.log(person.profession);
//or
let income = person.salary;
console.log(income);

//bracket notation
// console.log(person['age'])
//or
let youth = person['age'];
console.log(youth);

// fav Place , property access

console.log(person['fav Place']);