// symbols are a primitive data type in ES6 standard

// Create Symbol
// there is no constructor for Symbols
// they are primitive  values
const sym1 = Symbol();
// adding an identifier
const sym2 = Symbol('symbol2');
console.log(sym1,sym2);

// no two symbols can be the same
console.log(Symbol('123') === Symbol('123')); // will always be false

// to get a symbol to show up in template literals it needs to be converted to a string
console.log(`Hello ${sym1.toString()}`)

// MAIN USES FOR SYMBOLS
// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');
const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';
console.log(myObj[KEY1], myObj[KEY2]);

// Symbols are not enumerable in for....in
for(let i in myObj){
  console.log(`${i}: ${myObj[i]}`) // this will only show the regular.key properties
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key:'prop'})); // this will log like a normal string of the property with json object notation
console.log(JSON.stringify({[Symbol('sym1')]: 'prop' })); // this will log an empty json object
