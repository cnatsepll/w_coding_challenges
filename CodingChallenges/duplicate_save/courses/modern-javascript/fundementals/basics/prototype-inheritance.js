// in this example we can see how properties of the Person Constructor are passed to the Customer Constructor
// we can even pass methods and prototypes from one constructor to another
// this is inheritance in js
// the example below uses the greeting method as an example of using two different versions of a similar method between constructors

// Person Constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
// Greeting (Prototype Method)
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
  // call() is a function that allows us to call another function 
  // from somewhere else in the current context
  // we can call in the first and last name from the constructor we are inheriting
  // we are calling the Person constructor as emphasized by the name preceding .call()
  Person.call(this, firstName, lastName);
  // whatever extra properties we have for customer that we are not getting from Person, we will have to assign normally
  this.phone = phone;
  this.membership = membership;
}
// inherit the Person Constructor, prototype methods
// we are assigning the space for Customer prototypes to take the form of 
// an object with the values of the person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return a Customer Constructor Object and not a Person()
Customer.prototype.constructor = Customer;
// since we have specified the constructor
// we can create methods in the Customer class that share the same name with methods in other classes
// here we will demonstate that by creating a greeting that is specific to customers.
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
}


const person1 = new Person('John', 'Doe');
console.log(person1);


// create Customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);

console.log(customer1.greeting());
