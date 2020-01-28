
// Mimicking a server database with this collection of posts
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];
//// The below is commented out as it is set to run synchronously
//// we will continue the example with async code after the commented section
//
// function createPost(post) {
//   // mimicking server functions with setTimeout
//   // adding selected post to our posts array after 2 seconds
//   setTimeout(function(){posts.push(post);}, 2000);
// }

// function getPosts() {
//   // returns stored posts to the site page after 1 second
//   setTimeout(function(){
//     // starting with an empty output
//     let output = '';
//     // then itterating through the stored posts
//     // and adding them to a list for display
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000)
// }

// // first we want to create the post and then get the all posts after
// // in this current version we will not see post three 
// // this is because it only takes one second to get the posts
// // and 2 seconds to create the posts
// // so the posts will return before the new one is created
// // to get around this we will have to use async functions
// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();


// ASYNC SETUP
//
// we are passing in a second param to the createPosts function called callback
// this is going to represent the option for this function to be called
// and then link to another function, calling back to initiate another function
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';

    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}

// when createPosts is called it will do its thing
// then it will call get posts after it is complete
createPost({
  title: 'Post Three',
  body: 'This is post three'
}, getPosts);
getPosts();

