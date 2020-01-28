// arrow functions 
// they save some space
// but more importantly they allow the use of Lexical This

// The arrow function will return whatever comes after the arrow
// using whatever params are passed in through the parenthesis


// Here is a tier of going from traditional function syntax down through to an arrow function and a more consice version
const sayHello = function(){
  console.log('Hello');
}
// rebuild of the traditional function with fat arrow
const sayHelloArrow = () => {
  console.log('HelloArrow');
}
// single line arrow functions do not need curly braces
const sayHelloArrowConcise = () => console.log('HelloConcise');
// calling the functions
sayHello();
sayHelloArrow();
sayHelloArrowConcise();

// we can get into trouble with object litterals if we are not careful
// object litterals are when we use {} to make a json object on the spot
// so {msg: 'this is the message'} would be an object literal with the property msg
// to make sure object litterals are processed correctly by the arrow function
// we have to wrap them in parens to encapsulate the object and make sure it isnt interpreted as a different function
const objectLitteral = () => ({msg: 'awesome object litteral message right here'});
console.log(objectLitteral());


// arrow functions with parameters
// multiple params require parenthesis
const arrowParam = (name) => console.log(`Hello ${name}`);
arrowParam('Nick');
// arrow functions with single params dont even need parenthesis
const arrowParamC = name => console.log(`Look ${name} no params`);
arrowParamC('Ma');


const users = ['Nathan', 'John', 'William'];
// map is a cool function that will itterate through an array like forEach
// map is different than forEach tho as it creates a new array rather than forEach which just does something to each element
// forEach doesnt return anything
// so here the map will produce an array of eaqual size to users, with the name.length of each position 
const nameLengths = users.map(function(name){
  return name.length;
});
console.log(nameLengths);
// we can do the same mapping function as above, with fat arrows
const nameLengthsArrow = users.map((name) => {
  return name.length
});
console.log( nameLengthsArrow );
// and then since the return is implied we can be more concise
// this format works because it is only a single line
const nameLegnthsConcise = users.map(name => name.length);
console.log(nameLegnthsConcise);

