// Desctructuing

let a, b;
[a,b] = [100, 200];
// if we want to assign more values we can use the Spread operator '...'
// this will take the unasigned values and collect them into an array we are calling rest
[a, b, ...rest] = [100,200,300,400,500];
console.log(rest); // contains 300,400,500
// we can do the same thing we are doing with arrays, with objects
({a,b, ...rest2} = {a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(rest2); // will contain the properties for c through e


// ARRAY DESCTRUCTURING
// take any old array
const people = ['John', 'Beth', 'Mike'];
// then we can assign variables to the position values, just like above
const [person1, person2, person3] = people;
// and then spit out those values
console.log(person1, person2, person3);

// ARRAY DESCTRUCTURING WITH FUNCTION
// this function will return an array
// we can assign variables to the value positions just like above
function getPeople(){
  return ['John', 'Beth', 'Mike'];
}
let person4, person5, person6;
[person4, person5, person6] = getPeople();



// OBJECT DESCTRUCTURING
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

// old way of getting properties
const Oname = person.name,
  Oage = person.age,
  Ocity = person.city;

// new ES6 way of Desctructuing objects
// assumes that the variable name is the property name
const {name, age, city} = person;
console.log(person);

