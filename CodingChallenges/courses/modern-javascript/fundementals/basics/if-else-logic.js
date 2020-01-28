// if(something){
//   do something
// }else{
//   do something else
// }

const id = 100;

//EQUAL TO 
if (id == 100) {
  console.log('CORRECT')
}
// NOT EQUAL TO
if (id != 101) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Equal to Value and Type
if (id === 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}
// NOT Equal to Value and Type
if (id !== 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}

if (typeof id !== undefined) {
  // using back-ticks `` to pass text information with variables
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER THAN OR LESS THAN
if (id >= 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}
if (id <= 100) {
  console.log('correct');
} else {
  console.log('incorrect');
}


// IF ELSE
const color = 'red';
if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}


//LOGICAL OPERATORS
const name = 'steve';
const age = 20;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

//SHORTHAND FOR CONDITIONALS
// TERNARY Operator
console.log(id === 100 ? 'that is correct' : 'that is not correct');

// Without braces
if (id === 100)
  console.log('No Braces Correct');
else
  console.log('No Braces Incorrect');