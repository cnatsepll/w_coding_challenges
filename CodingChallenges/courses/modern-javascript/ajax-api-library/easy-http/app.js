// instantiate our easyHttp function
const http = new easyHttp;

// // GET Posts
// // using our get prototype function
// // we will be using the ability to pass a callback to load this async
// // the internal function that we are using as a callback takes the returned data as a param
// // then that function assigns itself the data held within that param
// // we then access the stored data in the callback function by passing in our own with the function call
// // the callback function's first parameter is a default error that will display if something goes wrong
// // we can choose whether to display that error or not
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts){
//   // if the error is not null then something bad happened and we will display the error
//   if(err){
//     console.log(err);
//   // if the error is null then everything went fine and we can display the posts
//   } else {
//     console.log(posts);
//   }
// });
// // GET Single Posts
// http.get('http://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });


// Create Data
const data = {
  title: 'custom post',
  body: 'this is a custom post, like so custom tho'
};


// // create POST
// // we are using the post prototype attached to our easyHttp class to make the post
// // what we are doing below is specifying the url to post to
// // the data that we want to post there
// // and then including a callback function to laod async and test for success
// http.post('http://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// // Update POST / using PUT
// // setting a post id for fun back tick practice 
// let postId = 5;
// // the url will direct us to the post that we would like to update
// // the data is the json object that we want to update the post with
// // the callback function makes sure it all happens async
// http.put(`http://jsonplaceholder.typicode.com/posts/${postId}`, data, function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// DELETE POST
let postId = 5;
// we are just passing through the url we are using to isdentify the post to delete
// and then identifying the variable names we want to identify with our callback function
http.delete(`http://jsonplaceholder.typicode.com/posts/${postId}`, function(err, response){
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
