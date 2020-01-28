const num1 = 100;
const num2 = 50;
let val;

// Simple math wuth numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;


// Math Object
// Pi
val = Math.PI;
// Eulers number
val = Math.E;
// Rounding to the nearest whole number
val = Math.round(2.4);
// Round up
val = Math.ceil(2.4);
// Round down
val = Math.floor(2.4);
// square root
val = Math.sqrt(64);
// absolute number
val = Math.abs(-2.4);
// to the power of
val = Math.pow(2.4, 2);
// find the smallest number
val = Math.min(2, 1, 3, 44, 53, 2, 5, 6, 3, 66, 3, 6, 26, 6);
// find the largest number
val = Math.max(2, 1, 3, 44, 53, 2, 5, 6, 3, 66, 3, 6, 26, 6);
// produce a random number between 0 and 1
val = Math.random();
// produce a random integer between 1 and 20
val = Math.floor(Math.random() * 20 + 1);




console.log(val);