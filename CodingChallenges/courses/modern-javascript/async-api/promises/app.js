// promises are an alternative to callbacks
// they are handled like callbacks but scructured more fluidly
// Mimicking a server database with this collection of posts
const posts = [{
  title: 'Post One',
  body: 'This is post one'
},
{
  title: 'Post Two',
  body: 'This is post two'
}
];


function createPost(post) {
  // creating a promise
  // we will tell our function to return a promise
  // then within that promise we will use the parameters resolve and reject
  // resolve when the promise is successful
  // and reject if there is some kind of error
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      // first we are going to take the submitted post and add it to our posts
      posts.push(post);
      // for testing purposes we are going to simulate an error
      const error = false;
      // if there are no error then we want to try and resolve the promise
      if(!error){
        // when we want to end the function and tell it to wait
        //  for the promise to resolve we pass in resolve()
        // this is where we would usually have a callback method
        resolve();
      } else {
        // in case there is an error we want to reject the promise
        // inside the reject we can pass a message
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}

// when createPosts is called it will do its thing and create a post
// since we are using a Promise within the createPost function
// we can end this function call with .then()
// inside the then we can put a function
// in this case we are passing in getPosts()
// this will run create posts
// wait for the promise to resolve
// then call getPosts() to display them
createPost({
  // adding the data we want to include in our post
  title: 'Post Three',
  body: 'This is post three'
})
// then we can use the .then and .catch functions with our promise
// .then() can take an argument of whatever we want to do if the promise resolves successfully
// in this case we are going to call getPosts()
  // we have to call getPosts() without the parenthesis
  // if we call getPosts with the parens then it will call itself before the promise reolves
.then(getPosts)
// we can also use .catch() to catch any potential errors that may occur
// just like a try catch block
// if there is an error, .catch() will fire 
// we can pass in a function as a parameter to kick off if .catch is called
.catch(function(err){
  console.log(err);
  
});


