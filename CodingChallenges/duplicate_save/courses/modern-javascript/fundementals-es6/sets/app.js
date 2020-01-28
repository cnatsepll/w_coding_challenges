// Sets store a unique value of any type
const set1 = new Set();

// add values to set
set1.add(100);
set1.add('A String');
set1.add({name: 'John'});
set1.add(true);
console.log(set1);

// alternate way of creating a set
const set2 = new Set([1, true, 'StringValue', {object: 'this is a property'}]);
console.log(set2);

// GET COUNT / SIZE
console.log(set1.size);

// CHECK for values
// we can only search for primitive values
// we cannot search for reference values, like properties in objects
console.log(set1.has(100));
// works same as above
console.log(set1.has(50+50));

// DELETE from the set 
set1.delete(100);
console.log(set1);

// ITTERATING THROUGH SETS
// for...of
for(let item of set1){
  console.log(item);
}
// the following syntax will all produce the same result: set1.values(); set1.keys(); set1.entries();
// they will all return the elements in the set, with entries displaying a little more info

// forEach loop
set1.forEach((value) => {
  console.log(value);
});


// CONVER SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);


