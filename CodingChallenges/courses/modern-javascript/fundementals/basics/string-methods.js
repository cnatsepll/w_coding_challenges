const firstName = 'Billy';
const lastName = 'Jones';
const age = 21;
const str = 'Hello there, my name is document'
const tags = 'web, design, ui, ux';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Appending
val = 'Choopa ';
val += 'Jones';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// To Uppercase
val = firstName.toUpperCase();

// To Lowercase
val = firstName.toLowerCase();

// first matching index
val = firstName.indexOf('y');
// last matching index
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('0');
// get lsat character
val = firstName.charAt(firstName.length - 1);


// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(-3);
val = firstName.slice(0, 4);

// split() creates arrays from strings
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('document', 'world');


// includes() returns boolean if string includes entered string
val = str.includes('document'); //true
val = str.includes('world'); //false

console.log(val);