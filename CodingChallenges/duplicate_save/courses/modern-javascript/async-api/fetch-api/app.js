document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

// this is a long one for a simple premise
// what we are doing is loading a text file
// to get it we are initiating a fetch request
// going in that requests returned info for a text object
// going in that text object to return the file's text
// each step of the process from fetch on is using a promise to pull info
// since they are all promises we can use .then() and .catch() to navigate the responses

// Get local text file
function getText(){
  // fetch returns promises 
  // so we can use the .then() and .catch() functions with fetch
  fetch('test.txt').then(function(res){
    // there are all sorts of methods and properties associated with promises and what they return
    // we can look at the response directly for a list of them
    // notably there are methods for text() and JSON()
    // console.log(res);
    // since we are dealing with a text file lets check that first
    // .text() will also return a promise so we will continue off of that promise chain
    return res.text();
  })
  // once we get into the returned text we can ask that promise for what it returns (we are calling it data
  // and then we can log or display that info
  .then(function(data){
    document.getElementById('output').innerHTML = data;
  })
  // we will include a .catch() in case of any errors
  .catch(function(err){
    console.log(err);
  });
}


// get local JSON file
// we will be doing largely the same thing as above but for a differently formatted file
function getJSON() {
  // fetch will return a promise 
  // we will .then() that promise to view the returned json
  fetch('posts.json').then(function (res) {
    // using .json() is also a promise 
    return res.json();
    })
    // so we will .then() the json with a function to handle the data
    .then(function(data) {
      let output = '';
      // the json will likely contain multiple objects 
      // so we we will itterate through that data to produce
      // a more easily readable response
      data.forEach(function(post){
        // adding new list items to our output from the json data
        output += `<li>${post.title}</li>`
      });
      // adding the returned data as li's to our output div
      document.getElementById('output').innerHTML = output;
    })
    // if there is an error we can log it
    .catch(function (err) {
      console.log(err);
    });
}



// get External API
// most of the process should remain the same other than the parsing differences 
// as we are expecting a different file structure
function getExternal() {
  fetch('https://api.github.com/users').then(function (res) {
    // the api returns a response in api format
    return res.json();
  })
    .then(function (data) {
      let output = '';
      // this is the github users api so we will name our variable appropriately
      data.forEach(function (user) {
        // then each user object will have multiple properties associated in the file
        // but for now we are only going to pull the login name
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}