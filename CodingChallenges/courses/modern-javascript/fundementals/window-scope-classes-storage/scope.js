// GLOBAL SCOPE
// var is a function scoped declaration
// let is a block scoped declaration
// const is a block scoped delclaration that cannot be mutated
var a = 1;
let b = 2;
const c = 3;

// the variables initialized in the function scope will not mess with their globally named versions
// the global versions will retain their values
// the function scoped variables will print with their function scped values in the function
// and their global scope values in the gloabal console log
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}
test();

// BLOCK SCOPE
if (true) {
  // global variable A will be changed by this declaration
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('If Scope / Block Scope', a, b, c);
}
for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}



console.log('Global Scope: ', a, b, c);