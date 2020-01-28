/*
* EasyHTTP Library
* Library for making HTTP requests
* @version 2.0.0
* @author Nick Benz
* @license MIT
*/

// we wont need the xhr object like we needed before
class EasyHTTP {
  // Make an HTTP GET request
  get(url){
    // we are going to want to wrap the get return in a promise to keep everything together nicely
    // the promise takes in the resolve and reject parameters
    // and will return us the result of our fetch
    return new Promise((resolve, reject) => {
      // opening a fetch request for the specified url
      fetch(url)
        // mapping the response result to json format
        // the return syntax is implied in arrow functions 
        // data => data :: is the equivilent of saying
        // taking the returned parameter, naming it data, and then returning that parameter/property
        //
        // since these thens and catches are wrapped in a promise
        // we will want to specify that we will want to return the values on resolve
        .then(res => res.json())
        // once the data is mapped we can display it
        .then(data => resolve(data))
        // if there is an issue in pulling the data we can catch it and display the error
        .catch(err => reject(err));
    });
  }
  // Make an  HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      // to make a successful post we will have to pass in more information than a get
      // we need the url where we will be posting the information to
      // then an object containing the METHOD, HEADERS(Content-type: '' )
      // and a body containing the data we want to post
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  // Make an  HTTP PUT request
  // PUT functions almost the exact same as POST
  // it is going to update instead of insert data
  // but the steps to get access to the data is the same as post
  // we will just have to explicitly specify what data in the db we want to update
  // and we can do that in the url which can be updated by the user when the function is called
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  // Make an HTTP DELETE request
  // similar to a GET, DELETE does not need data, just a url
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
        // we got rid of the body portion of the fetch since we will not be sending data
      })
        .then(res => res.json())
        // fetch wil still return us something on a successful request
        // in this case that something will be nothing since this is a DELETE request
        // we will still want to show the user something so we will insert our own message
        .then(() => resolve('Resource Deleted....'))
        .catch(err => reject(err));
    });
  }
}