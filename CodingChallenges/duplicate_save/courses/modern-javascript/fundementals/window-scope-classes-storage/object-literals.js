const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: ' FL'
  },
  getBirthYear: function () {
    // here we have to use the keyword this to let the dom know that we are looking for the current version of age
    // since we dont have a global var named age we will need to further specify what we are looking for 
    return 2019 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);


const people = [{
    name: 'John',
    age: 30
  },
  {
    name: 'Mike',
    age: 23
  },
  {
    name: 'Nancy',
    age: 40
  }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}