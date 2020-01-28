// Just some console log practice
console.log('Hello World');
console.log(123);
console.log(true);
let greeting = 'Greetings!';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({
  a: 1,
  b: 2
});
// table shows the output of an object as an easy to read table
console.table({
  a: 1,
  b: 2
});

console.error('This is red error text');

//clears console text
console.clear();

console.warn('This is yellow warning text');

// calculates the time between two points with the same given name
console.time('Hello');
console.log('text to be timed between "hello" outputs');
console.log('text to be timed between "hello" outputs');
console.log('text to be timed between "hello" outputs');
console.log('text to be timed between "hello" outputs');
console.log('text to be timed between "hello" outputs');
console.log('text to be timed between "hello" outputs');
console.timeEnd('Hello');