// Maps are key value pairs and work just like they would in Java

// initializing a new map constructor
const map1 = new Map();

// setting map keys
// we can set empty objects and empty functions which is weird and cool
const key1 = 'some string',
  key2 = {},
  key3 = function() {};

// set map values by key
map1.set(key1, 'Value of Key1')
map1.set(key2, 'Value of Key2')
map1.set(key3, 'Value of Key3')

// get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3))

// count values
// will count the length of the key set array to determine how many pairs exist in the map
console.log(map1.size); 

// ITTERATING MAPS
// loop using for...of to get keys and values
// also i guess you can return an array and maybe even an object from for...of loops
for(let [key, value] of map1){
  console.log(`${key} = ${value}`);
}


// we can also just get the keys 
const keyset = map1.keys();
// or just the values
const valueset = map1.values();

// Iterate Keys Only
// we can use this keyset to itterate through the keys only if we want
for (let key of map1.keys()) {
  console.log(`${key}`);
}

// Iterate Values Only
for (let value of map1.values()) {
  console.log(`${value}`);
}

// Loop with forEach
map1.forEach(function(value, key){
  console.log(`map for each: ${key} = ${value}`);
});


// CONVERT TO ARRAYS
// making an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);
// make an array of the map values
const valArr = Array.from(map1.values());
console.log(valArr);
// make an array from the map keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
