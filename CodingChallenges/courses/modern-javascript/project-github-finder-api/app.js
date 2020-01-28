// instantiate GitHub class
const github = new GitHub;
// instantiate UI class
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');
// search input event listener
searchUser.addEventListener('keyup', (e) => {
  // get get input text
  const userText = e.target.value;
  // check that there is user input
  if(userText !== ''){
  // make HTTP call
  // we will be initiating the promise function in our github class to pull users
  // this will be using a query in the url to pull users based on user name, dependent on what the user types
  github.getUser(userText)
    .then(data => {
      // we are going to check to see if the user input text is related to an accutal account
      // if the account does not exist, GitHub will return a message with the string 'Not Found'
      // if we encounter that string in the profile then we will know the profile does not exist
      if(data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      // show profile
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })    
  // if there is no user text then we will clear the form
  } else {
    ui.clearProfile();
  }
});