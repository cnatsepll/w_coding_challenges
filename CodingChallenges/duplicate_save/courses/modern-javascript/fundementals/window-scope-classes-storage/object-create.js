

const personPrototypes = {
  greeting: function(){
    return `Hi there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}
// we can pass the prototypes that we just created to a new object, by creating them with Object.create
const mary = Object.create(personPrototypes);
// we can also add properties by asigning them like below
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

// if you look in the __proto__ property of the below log
// you will see the greeting property from the method that we passed in through Object.create
console.log(mary);
console.log(mary.greeting());
// below is an example of using an internal method to change properties
mary.getsMarried('Thomson');
console.log(mary.greeting());


//
// Alternate Syntax
// if we create within the Object.create function
// then we will have to define the properties within as objects JSON style
// so we are passing in the exiting personPrototype values 
// and in adition to that we are assiging property values to the brad object
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad);
console.log(brad.greeting());
