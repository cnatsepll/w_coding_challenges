document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);



// get local Text file
function getText(){
  // the res is whatever the fetch returns 
  // then we are pulling the text out of it
  // all the arrow functions only take a single param and can be treated as single lines
  // the arrow is expecting a param and a return
  // we are just filling those two variables with res and the res.text
  fetch('test.txt').then(res => res.text())
  // this version with data is very similar to the notation above
  // here we are using the returned data and appending it to the inner html of our document
  .then(data => {
    document.getElementById('output').innerHTML = data;
  })
  // same with the error that we would be returned if the response is not successful
  .catch(err => console.log(err));
}


// get local JSON file
function getJSON() {
  fetch('posts.json').then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


// get External API
function getExternal() {
  fetch('https://api.github.com/users').then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}