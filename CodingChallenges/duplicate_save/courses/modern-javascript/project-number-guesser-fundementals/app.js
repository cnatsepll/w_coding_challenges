// GAME FUNCTION
// - Plater must guess a number between a min and max
// - Player gets a certain amount of guesses 
// - Notify the player of the correct answer if they lose
// - Let the player choose to play again

// Game Values
// comma seperated name value pairs will be their own let named variables
let min = 1,
    max = 10,
  winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;      



// Event Listeners
// play again event listener
game.addEventListener('mousedown', function(e){
  // if the player clicks the play again option
  // we will reload the page for a new game
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});
// listen for guess
guessBtn.addEventListener('click', function(){
 let guess =  parseInt(guessInput.value);
 console.log(guess);
 // Validate Input
 // if the number guessed is not a number 
 // or greater than the minimum allowed
 // or greater than the maximum allowed
 // then we will display an error
 // isNaN(guess) will check to see if the guess is a number
 if(isNaN(guess) || guess < min || guess > max){
   // passing through a message using our variables and setting the message text color to red
  setMessage(`Please enter a number between ${min} and ${max}`, 'red');
 }

 // check if the guess is the winning number
 if(guess === winningNum){
   // passing values into our gameOver function to display appropriate message colors
   gameOver(true, `${winningNum} is correct, VICTORY!!!`)
 } else {
  // if the wrong number was guessed
  guessesLeft -= 1;
  // check to see how many guesses are left
  if(guessesLeft === 0){
    // game over - lost
    // disable input and send a message
    gameOver(false, `You lose, good day sir. The correct number was ${winningNum}`);
  } else {
    // game continues, answer was incorrect
    // change border color
    guessInput.style.borderColor = 'red';
    // clear input
    guessInput.value = '';
    // tell user their guess was wrong
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
  }
 }
});


// Game Over
function gameOver(won, msg){
  // setting our message color depending on whether the user won or not
  let color;
  // if won is true then the color is green otherwise the color will be red
  won ? color = 'green' : color = 'red';
  // if the guess is correct we will disable the input to prevent further guessing.
  guessInput.disabled = true;
  // let the user know that they won
  // change guess input border color based on if the player won or not
  guessInput.style.borderColor = color;
  // set game message
  setMessage(msg, color);
  // Play Again
  guessBtn.value = 'Play Again?';
  guessBtn.className += 'play-again';
}


// Get Winning Number
function getRandomNum(min, max){
  // Math.random() produces a random decimal
  // then we multiply that random decimal by our min max range
  // Math.floor converts our result to an integer by rounding down
  return Math.floor(Math.random() * (max-min+1)+min);
}

// Set Message
// taking the message used to call the function
// and appending it to our message display div with dynamic color options
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}