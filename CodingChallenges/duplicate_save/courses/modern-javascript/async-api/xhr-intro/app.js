document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // Create an XHR object
  // XML HTTP Request
  const xhr = new XMLHttpRequest();
  // OPEN
  // specify the type of request we want to make
  // and the url where we want to make it to
  // the third variable is whether we want it to be asynchronous or not
  xhr.open('GET', 'data.txt', true)
  // viewing the ready state
  console.log('READYSTATE OPEN', xhr.readyState);
  // onprogress 
  // used for spinners and loaders
  xhr.onprogress = function(){
    console.log('READYSTATE LOOOADING', xhr.readyState);
  }
  // two ways to check if the data is returned are listed below
  // first the outdated explicit ready state values method
  // and then the modern syntactic sugar onload method
  // both go through the same or similar steps internally
  xhr.onreadystatechange = function() {
    // when onreadystatechange runs it goes through all the states 2-4
    // so we will have to check if it hits 4 before we choose to move forward or we may not have our data yet
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200 && this.readyState === 4){
      console.log(this.responseText);
    }
  }
  // onload is Ready State Value #4
  xhr.onload = function(){
    // this is refering to the xhr object
    // checking to make sure that everything went as expected
    // by the time onload runs, we are already at readystate 4 so we dont need 
    // to confirm ready state position with this method
    if(this.status === 200) {
      // if we received data sucessfully then we will go into the xhr
      // and display the text it picked up
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }
  // in case something goes wrong we want to have an option for seeing the errors
  xhr.onerror = function(){
    console.log('Request error....');
  }
  // to finalilze the call we have to send()
  xhr.send();
}

// HTTP Statuses
// 200: ok
// 403: forbidden
// 404: not found

// Ready State Values
// 0: request not initialized
// 1: server connection established
// 2: reuest recieved
// 3: processing request
// 4: request finished and response is ready 