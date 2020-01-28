// Mediator Pattern
// Behavioral Pattern like the Observer
// interface for interacting with colleagues

// two constructor functions
// one for the chat room and one for the user
const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  // send method takes in a message to send and a to who to send it
  send: function(message, to){
    this.chatroom.send(message, this, to);
  },
  // receive method displays the sent message
  recieve: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users
  return {
    // Chatroom public functions
    register: function(user){
      // setting our user in the user map
      users[user.name] = user;
      // setting the chatroom to the current room
      user.chatroom = this;
    },
    send: function(message, from, to){
      // checking to see if this message is designated to a single user
      // or if it should be broadcast to the chatroom
      if(to){
        to.recieve(message, from);
      } else {
        // mass message
        // as long as the user in our user array is not the sending user
        // then that user will get the sent message
        for(key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

// creating users
const brad = new User('Brad');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

// creating a chatroom
const chatroom = new Chatroom();
// registering the users to the chatroom
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);


// mocking up a send, user to user
brad.send('Hello Jeff', jeff);
sarah.send('Hi Brad whats up', brad);
// mocking up a send to the whole room
jeff.send('Hey everyone');