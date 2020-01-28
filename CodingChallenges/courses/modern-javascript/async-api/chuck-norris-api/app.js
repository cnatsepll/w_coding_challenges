// http://www.icndb.com/api/

document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e){
  // grabbing the user selected number of random jokes to display
  const number = document.querySelector('input[type="number"]').value
  // initializing a new XHR constructor
  const xhr = new XMLHttpRequest();
  // setting the value of the xhr request to use the Chuck Norris Joke API
  // using template litteral backticks to pass in the number of jokes to display
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);
  // setting up what we want to do with the info once we get it
  xhr.onload = function() {
    // checking the status of the xhr object
    if(this.status === 200){
      // we are receiveing JSON data back so we will have to parse it out
      const response = JSON.parse(this.responseText);
      // initializing an output variable
      let output = '';
      // the first thing we will get back from the response is whether it succeeded or failed
      if (response.type === 'success'){
        // if we received jokes back from the api
        // we will want to loop though it and pull out the info
        // response is an object with type and values 
        // to iterate the values we will have to dig in a bit deeper than the surface level
        // this changes depending on how the API is formatted
        response.value.forEach(function(joke){
          // joke represents the current itteration
          // we will be pulling out the joke property from the object we named joke
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += '<li>Something Went Wrong</li>'
      }
      // places the output in our designated joke container
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  // finalizing the call with an action to send the data
  xhr.send();
  e.preventDefault();
}