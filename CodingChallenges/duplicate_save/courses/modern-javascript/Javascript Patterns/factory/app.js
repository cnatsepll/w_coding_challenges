// factory pattern
// interface for creating objects
// used in applications manage, maintain, and manipulate collections of objects
// that may be difference but have similar characteristics
//

// this is an example of the factory pattern
function MemberFactory() {
  // we take in the given parameters and then depending on what we get we spit out an object
  this.createMember = function(name, type) {
    let member;
    if(type === 'simple'){
      member = new SimpleMembership(name);
    } else if(type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }
    member.type = type;
    // define is a function on all members objects 
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }
    return member;
  }
}
// these supporting consts are accessed by the factory function to assign values to a new object
const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}
const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
}
const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25';
}

// here we are using what we built
// first by creating an array to hold our members
const members = [];
// initalizing our factory
const factory = new MemberFactory();
// now we can add to our member array by having the factory create objects based on what we feed it
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Jane Doe', 'standard'));
members.push(factory.createMember('Clark Kent', 'super'));
// console.log(members);

// here we are utilizing the define function to console log and check our list
members.forEach(function(member) {
  member.define();
})