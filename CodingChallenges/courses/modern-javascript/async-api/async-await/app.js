// when compiler reach at await it stops executing 
// and push everything into event queue
// and continue with synchronous code after async function. 


// just by adding 'async' to the beginning of a function, we turn it into a promise
// by turning it into a promise we gain access to .then and .catch functionality
// we can also add await inside of an async function
// this will keep the fucntion from returning a value until the await step has completed
//
// Here we have a deomonstration of an aysnc await function
// we open it up with async, turning out entire function into a promise
async function myFunc(){
  // next we instantiate something that will take some time to complete
  // in this case we will be using a set timeout in a promise
  const promise = new Promise((resolve, reject) => {
    // here we are telling our promise to return the string hello after 1 second
    setTimeout(() => resolve('Hello'), 1000);
  });
  // we can also plan for errors
  const error = false;
  // if there are no errors we can proceed with our async awaiting
  if(!error){
    // next we will instantiate a constant to hold our result from the above promise
    // we will be using the 'await' keyword to tell our const
    // not to set any values until the promise is resolved
    const res = await promise;
    // then we will return the awaiting res
    // this keeps the function from returning anything while it is still processing
    return res;
    // if it turns out something weird happened, we can let the user know
  } else {
    // we are using await just to be sure we dont send out anything while the function is sitll processing
    // here we are accessing the promise object directly instead of the one we constructed
    await Promise.reject(new Error('something really weird happened yo'))
  }
}
myFunc().then(res => console.log(res));

//
//
// we are going to do the same as above but with a fetch request
async function getUsers() {
  // by setting up this const with await
  // we will be waiting until the fetch is resolved before setting any values
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  // then by also setting data with await
  // we will wait for response to come back
  // then we will wait for response to come back
  // then we will set data to the json value of response
  const data = await response.json();
  // we will only proceed if the second promise resolves, 
  // which iteself waits for the first promise to resolve
  return data;
}
// get users is a promise because we are using the async keyword
// we will be doing standard promise stuff to return the data within getUsers()
getUsers().then(users => console.log(users));
