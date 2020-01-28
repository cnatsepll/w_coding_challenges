// this is going to act as our library
function easyHttp() {
  // setting http to the XHR object
  // instead of setting everything to the original XHR object 
  // we will be using this as a shortcut to http
  // both will be doing the same thing but now we can use the function
  this.http = new XMLHttpRequest();
  }

// Make an HTTP GET Request
// sertting up a prototype within our easyHttp function designed to handle GET requests 
easyHttp.prototype.get = function(url, callback){
  // opens a get request with the specified url asynchronously
  this.http.open('GET', url, true);
  // when we call an onload we want to make sure that the status is 200 or good
      // using this.http will result in undefined inside the function 
      // inside a function, this pertains only to the scope of the function
      // to get around this we will pass "this" through another variable that the function can access
  let self = this;
  // then where we would normally use this to define our variable we will instead use self (which contains this)
  self.http.onload = function () {
    if (self.http.status === 200) {
      // to prevent the data from being returned before it is generated we will be using a callback
      // it doesnt have to, we are naming our callback as callback
      callback(null, self.http.responseText);
      // our callback has two prameters
      // the first we will use as our error, and the second is what is returned from hitting the API
      // in the above callback it is set to null, as everything has worked out and there is no error
      // if nothing works out then we will report a different result in the else statement
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
// request takes in the url where the data is expected to go
// the data that is expected to go there
// and an internal callback method to keep it async
easyHttp.prototype.post = function(url, data, callback){
  // first we will open a POST call through the XHR object
  // we are defining the type of call (POST)
  // the url we want it to post to
  // and that we are expecting this to be async
  this.http.open('POST', url, true);
  // setting the content type
  // we are accessing the request header of our POST to define the type of post it is
  // in this case we will be sending JSON
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  self.http.onload = function () {
    // we dont need to check the status on a POST request so we can just move forward to the data portion
    callback(null, self.http.responseText);
  }
  // the data we are going to be posting will be in JSON format
  // to get it to pass through the web as a URI we will need to stringify the info
  this.http.send(JSON.stringify(data))
}


// Make an HTTP PUT Request
// PUT is very similar to POST
// instead of inserting something to the database we are updating it
// we still need to know the destination url, the data to update with, and a callback 
easyHttp.prototype.put = function (url, data, callback) {
  // opening the PUT request
  this.http.open('PUT', url, true);
  // we are still going to be moving JSON formatted data
  this.http.setRequestHeader('Content-type', 'application/json');
  // we still need to pass down this as a variable the function can reach
  let self = this;
  // we will use the callback function on load
  self.http.onload = function () {
    callback(null, self.http.responseText);
  }
  // cosing it off with the actual sending of stringified data
  this.http.send(JSON.stringify(data))
}


// Make an HTTP DELETE Request
easyHttp.prototype.delete = function (url, callback) {
  // we want to open a DELETE request
  this.http.open('DELETE', url, true);
  // everything will be set up similar to the GET request
  let self = this;
  // then when that request has come back we want to make sure everything went successfully
  self.http.onload = function () {
    if (self.http.status === 200) {
      // since we are deleting a post we wont recieve any kind of response text back
      // we still want to check for errors n all that tho
      // so instead of passing through the empty response text, we can pass out own message
      callback(null, 'post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }
  // cap it off with a request to actually send the request
  this.http.send();
}