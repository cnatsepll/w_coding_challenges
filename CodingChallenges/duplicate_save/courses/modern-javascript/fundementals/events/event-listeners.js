const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Input
taskInput.value = '';

// Submit
// form.addEventListener('submit', runEvent);

// in testing the key functions listed below,
// when trying to get the letters to show up as they are typed, keyup works the best
// Keydown
taskInput.addEventListener('keydown', runEvent);
// Keyup
taskInput.addEventListener('keyup', runEvent);
// Keypress (a more gneralized key event)
taskInput.addEventListener('keypress', runEvent);
// Focus (clicking into an element)
taskInput.addEventListener('focus', runEvent);
// Blur (clicking out of an element)
taskInput.addEventListener('blur', runEvent);
// Cut 
taskInput.addEventListener('cut', runEvent);
// Paste
taskInput.addEventListener('paste', runEvent);

// Tracking any kind of input event
// Input
// this will track any of the above actions except for focus and blur
taskInput.addEventListener('input', runEvent);

// Change (looks for changes in selections, good for select lists)
select.addEventListener('change', runEvent);


function runEvent(e) {
  console.log(`EVENT TYPE:  ${e.type}`)
  // Get Input Value
  // console.log(taskInput.value);

  // when paired with the keydown event
  // this will track the keys a uers pressed
  // console.log(e.target.value);
  // we can pass the typed characters to another element and display them as they are typed
  heading.innerText = e.target.value;

  // e.preventDefault();
}