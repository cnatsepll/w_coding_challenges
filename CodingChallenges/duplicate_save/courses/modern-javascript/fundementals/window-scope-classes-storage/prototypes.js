// every object has a prototype 
// a prototype is an object itself
// all objects inherit their properties and methods from their prototype
// object litterals inherit from Object.protoype
// objects created through a constructor inherit from ConstructorName.prototype
// using the prototype chain you have the prototype and you can go up to the object


// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // name and birthday will be different for each new person but the calculate age function will be the same
  // since it is a static method we can call on we will set it as a person constructor prototype
  // this function nested within our Constuctor Object is called a Method
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   //getUTCFullYear() is a js function that gets year in the specified date accoring to universal time
  //   // the whole 1970 bit is the common formula to get a birthday from UTCFullYear
  //   // we will wrap it in a Math.abs function to make sure we are getting an absolute number
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// passing static functions into the prototype helps keep the constructor code more readable
// Calculate Age 
// this is passed into the person constructor prototype
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  //getUTCFullYear() is a js function that gets year in the specified date accoring to universal time
  // the whole 1970 bit is the common formula to get a birthday from UTCFullYear
  // we will wrap it in a Math.abs function to make sure we are getting an absolute number
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Get Full Name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}
// Gets Married
// we can use prototypes to alter information stored in the constructor object
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

// instatiate new person object
const john = new Person('John', 'Doe', '8/12/90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');


console.log(john);
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());

// returns true, since mary is a person object with the first name property
console.log(mary.hasOwnProperty('firstName'));
// returns false, since the prototype is not a property of the constructor
console.log(mary.hasOwnProperty('getFullName'));
