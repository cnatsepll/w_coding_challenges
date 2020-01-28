const http = new EasyHTTP;

// Create user data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
};



// GET users
// the get method will return a promise so we can parse through the return with then and catch
http.get('http://localhost:8080/usageapp/api')
  // .then(data => document.getElementById('data').innerHTML = (data[0].message))
  .then(data => {
    data.forEach(element => {
      elementLi = document.createElement('li');
      elementLi.innerHTML = `This is the message: ${element.message} <br> This is the name: ${element.name}`;
      document.getElementById('data').appendChild(elementLi); 
    });
    
    console.log(data);
})
  .catch(err => console.log(err));



// POST new user
// sending a post to the specified url passing through selected data
http.post('http://jsonplaceholder.typicode.com/users', data)
  // if successful it will return an object containing the data as it exists after being posted
  // in this case it will come back with an id, even tho we did not append one
  // this lets us know that the data was inserted to the db and assigned an id
  .then(data => console.log(data))
  // if it doesnt work out then we get the error
  .catch(err => console.log(err));


// PUT new info in db for user
// almost the exact same as the post but we will specify the user to update in the url
// in this case we will be updating the user with the id of 2 to use the data we have specified
http.put('http://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));


// DELETE user from db
// very similar to the get as we will only be using the url to perform our delete
http.delete('http://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));