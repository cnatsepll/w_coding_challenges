let val;

// Number to String
val = String(555);
val = String(4 + 4);
// Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1, 2, 3, 4]);
// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');
// Bool to Number
// true = 1 false = 0 null = 0
val = Number(true);
val = Number(false);
val = Number(null);
// will return NaN (not a number)
val = Number('hello');

// String to Number
// Will only parse number to nearest integer
val = parseInt('100');
// String to Number with decimals
val = parseFloat('100.30');

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
// toFixed is used to describe how many decimals a number should have
// toFixed(2) would be 2 decimal places toFixed() would be no decimals
console.log(val.toFixed());

// will add 6 to the string 5 resulting in the string of 56
const val1 = String(5);
const val2 = 6;
let sum = val1 + val2;
// if we wanted to return 56 as a number we can cast it
sum = Number(val1 + val2);
// if we wanted val 1 to be a number we could cast that as well

console.log(sum);
console.log(typeof sum);