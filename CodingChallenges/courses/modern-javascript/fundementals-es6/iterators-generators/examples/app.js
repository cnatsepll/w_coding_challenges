// itterators are like advanced loops that can be paused
// gnereators are functions that can be paused and can return multiple values


// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;
  return {
    next: function(){
      // split up the ternary function vertically for easier reading
      return nextIndex < names.length 
      ? {value: names[nextIndex++], done: false} 
      : {done: true}
    }
  }
}
// creating an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Initilize the itterator and pass it the names array
const names = nameIterator(namesArr);
// .next() will itterate through the array to the next position each time it is called
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
// removed value to show that we have reached "done"
console.log(names.next());



// Generator Example
// the '*' tells javascript that this is a generator and not a function
// each time the generator is called it will yield the next result in queue
function* sayNames(){
  // we can do whatever we want in the function then we can yield values from it
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}
const newName = sayNames();
console.log(newName.next());
console.log(newName.next());
console.log(newName.next());
console.log(newName.next());

// ID Creator Generator Example
function* createIds(){
  let index = 0;
  while (true){
    yield index++;
  }
}
// this will itterate through id's and return the next one in queue each time it is called
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);