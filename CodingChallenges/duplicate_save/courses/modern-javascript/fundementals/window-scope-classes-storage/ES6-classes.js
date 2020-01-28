// creating a class
// under the hood, the class is just using a constructor with a psuedo class of person
// with the properties that are listed below
class Person {
  constructor(firstName, lastName, dob) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`
  }
  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName){
    this.lastName = newLastName;
  }
  //
  // Static Methods
  // methods that can and should exist without needing access to the object's properties
  static addNumbers(x, y) {
    return x + y ;
  }
}

const mary = new Person('Mary', 'Willaims', '11-13-1980');
console.log(mary);
console.log(mary.greeting());
mary.getsMarried('Thomson');
console.log(mary.greeting());
// The method addNumbers is static, and therefore isnt tied to any specific instance of Person
// it is not instantiated
// because it is static we can not call it in the following way
// console.log(mary.addNumbers(1,2))
// the method does not belong to mary, just to the Person constructor class
// to call a static function we would call it off of the class itself
console.log(Person.addNumbers(1,2));

// 
//
// Inheritance and Subclasses
//
//
class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    // since we want Customer to be a subclass of the Person class
    // we will want to call the Person contructor when instantiating a Customer class
    // this is done with super();
    // this calls the Parent Class Constructor
    // since it calls the constuctor, we will have to give it the params it expects to construct with
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
  // we can also create Customer specific methods 
  static getMembershipCost(){
    return 500;
  }
}
// This will create a Person class Object with the Customer constructor
// the class constructor hierarchy can be seen in the console with the following log
const john = new Customer('john', 'doe', '555-555-5555', 'Standard');
console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());




