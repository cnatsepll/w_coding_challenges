// UPDATING THE app.js file to use ES6 CLASSES

// Creating the EventObserver Class
class EventObserver {
  // adding the observers list to the eventobserver constructor
  constructor(){
    this.observers = [];
  }
  // moving the prototype properties to methods
  subscribe(fn){
    // adding function to our observers list
    this.observers.push(fn);
    // fn.name will return the name of the function, it is built in and not something we added to fn
    console.log(`you are now subscribed to ${fn.name}`);
  }
  unsubscribe(fn){
    // passing in a callback function in the filter
    this.observers = this.observers.filter(function (item) {
      // filter out from the list, whatever matches the callback function.
      // if there is no match, the callback gets to stay on the list
      // the filter retuns a new list and reassigns the list of observers
      if (item.name !== fn.name) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }
  fire(){
    this.observers.forEach(function (item) {
      // item.call() will invoke the item function
      item.call();
    });
  }
}


// instantiating the event observer prototype
const click = new EventObserver();

// event listeners for the page buttons
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrentMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurrentMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrentSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurrentSeconds);
});
document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});



// Click Handler
const getCurrentMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrentSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}