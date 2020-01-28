/*
* EasyHTTP Library
* Library for making HTTP requests
* @version 3.0.0
* @author Nick Benz
* @license MIT
*/

// this time around we will be doing our fetching with async await to keep it neat
class EasyHTTP {
  // GET request
  // creating a promise function with async
  async get(url) {
    // creating a response constant when we get a return from our fetch 
    // fetch is a highly condensed version of XHR (xml header request)
    // it is going to do what api's do best and request information from the url and parameters loaded into it
    // in this case we are just doing a GET
    // so all we are asking for is whatever is located at the url destination
    const response = await fetch(url);
    // creating a data constant with the response information we get back from the fetch
    // by setting our responses to variables we can employ the await syntax to keep the
    // system waiting for proper info to store before moving forward
    const responseData = await response.json()
    // if everything checks out we will then have json formatted response data to return to the user
    return responseData;
  }

  // POST request
  async post (url, data) {
    // this post formatting is pretty standard
    // we will create a response constant with the result of the fetch
    // set to await so the compiler will wait for the fetch to complete
    // before assigning anything to the response const
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      // we are expecting json data so we will have to stringify it to
      // pass it through the url 
      body: JSON.stringify(data)
    });
    // then we can set our return data to a new variable so we can employ await
    // using .json() to formatt the response as a json object probably
    const resData = await response.json();
    // then we can return that data once the process is finished
    return resData;
  }

  // PUT request
  async put (url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }


  // DELETE request
  async delete(url, data) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    // DELETE will remove data from the db so it wont come back with anything
    // we can choose to pass our own message on success
    const resData = await 'Resouce Deleted ....';
    return resData;
  }


}