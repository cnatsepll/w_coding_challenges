// object litteral, good for one instance 
const chuck = {
  name: 'Brad',
  age: 30
}

// Constructors are like Classes in Java
// we can tell that we are calling a constructor when we see the word "new" and parens ()
// const element = new Constructor();

// Methods are Functions that are inside of Objects

// constructor methods are like object litterals that can be used more than once
// we can instantiate an object from this constructor with the properties and parameters
// we can add parameters to the Constructor to create dynamic objects
//
// "this" refers to the function scope and assigns the outside name variable
// as the name property in the constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  // this function nested within our Constuctor Object is called a Method
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    //getUTCFullYear() is a js function that gets year in the specified date accoring to universal time
    // the whole 1970 bit is the common formula to get a birthday from UTCFullYear
    // we will wrap it in a Math.abs function to make sure we are getting an absolute number
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
// using the person constructor below we can create a new object 
// that come pre made with any inherent constructor properties
// at this time Person only took a name and an age as params
// const brad = new Person('brad', 40);
// const john = new Person('john', 35);
// console.log(john);
// console.log(brad);
const brad = new Person('Brad', '9-10-1981');
// we can call properties of the person object directly
console.log(brad.calculateAge());


// its not recomended to use constructors for things like Strings and Numbers (Primitives)
// here's how you do it anyways
//
// Strings
const name1 = 'Jeff';
const name2 = new String('Jeff');
console.log(name1); // returns Jeff
console.log(name2); // returns String Object with each char as 'J''e''f''f' a position in the string array
// because name2 is an Object, it can be added to 
name2.foo = 'bar'; // adds the property foo with the value 'bar' to the name2 String Object
console.log(name2); // will have additional property (foo: "bar")
// the following if else statement will return NO
// this is because name2 has a value of Jeff but the type will be OBJECT instead of STRING
// name2 == 'Jeff' will return YES since it is checking on value alone 
if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

//
// Numbers
const num1 = 5;
const num2 = new Number(5);

//
// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//
// Function
const getSum1 = function(x,y){
  return x + y;
}

const getSum2 = new Function('x','y','return 1 + 1');

console.log(getSum2(1,1));

//
// Objects
const john1 = {name: 'john'};
const john2 = new Object({name: 'john'});
console.log(john1);

//
// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

//
// Regular Expressions
// word character that occurs one or more times
const re1 = /\w+/;
// if creating as an object you need a second backslash to escape it
const re2 = new RegExp('\\w+')