// FOR LOOP
for (let i = 0; i < 10; i++) {

  if (i === 2) {
    // console.log('2 is my favorite number');
    // continue will stop the loop and proceed to the next itteration
    // anything past the continue will not fire before the loop restarts
    continue;
  }
  if (i == 5) {
    // console.log('Stop the loop');
    // break will stop the loop entirely
    // nothing in the loop after the break will fire
    break;
  }
  // console.log("number " + i);
}


// WHILE LOOP
let i = 0;
while (i < 10) {
  //console.log('Number ' + i);
  i++;
}


// DO WHILE LOOP
// will run at least one time no matter what
// in this instance we will log one event before the function checks to see if x is in bounds
let x = 100;
do {
  // console.log('number ' + x );
  x++
}
while (x < 10);

// itterating through arrays
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }
cars.forEach(function (car, index, array) {
  // console.log(`${index}  :  ${car}`);
  // console.log(array);
});



// MAP
// creating an array of objects
const users = [{
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Sara'
  },
  {
    id: 3,
    name: 'Karen'
  }
];
// returns an array of the user ids
const ids = users.map(function (user) {
  return user.id;
});
// console.log(ids);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}


// FOR IN LOOP
for (let x in user) {
  // this will show us each key in the user object
  console.log(x);
  // if we want we can show the value associated with the key
  console.log(`${x}  :  ${user[x]}`);
}
