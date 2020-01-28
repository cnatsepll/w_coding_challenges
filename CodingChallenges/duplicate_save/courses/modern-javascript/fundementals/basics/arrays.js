// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Bannana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {
  a: 1,
  b: 2
}, new Date()];

let val;

// Get Array length
val = numbers.length;

// Check if is Array
val = Array.isArray(numbers);

// Get single value from Array
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// add on to end of array
numbers.push(250);
// add on to front of array
numbers.unshift(120);
// take off from end of array
numbers.pop();
// take off from front of array
numbers.shift();
// Splice values
// removes specified portion from array and saves that array without the spliced portion
numbers.splice(1, 3);
// Reverse Array
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sort Array
// default is to sort Ascending order
val = fruit.sort();
val = numbers.sort();
// COMPARE FUNCTION
// sort acsending
val = numbers.sort(function (x, y) {
  return x - y;
});
// sort descending
val = numbers.sort((x, y) => {
  return y - x;
});

// Find
// returns first number found in the order of the array
// in this case returns the first number under 50;
const under50 = (num) => {
  return num < 50;
}
val = numbers.find(under50);


console.log(numbers);
console.log(val);