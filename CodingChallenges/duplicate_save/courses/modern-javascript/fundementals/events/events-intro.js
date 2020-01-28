document.querySelector('.clear-tasks').addEventListener('click', function (e) {
  console.log('Yo Wuddup');
  // here we are passing in the element we are selecting as 'e'
  // then we are preventing e (which is a link) from taking us to a webpage
  // this is so we can view the console log instead of leaving the page
  e.preventDefault();
});


// This code is identical in function to the above function, but called as a named function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  let val;
  val = e;

  // Event Target Element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  // change the button text when clicked
  e.target.innerText = 'Ya Clicked it';


  // Event Type
  val = e.type;
  // timStamp will return the number of milliseconds that the element has been on the page up to the point of being called
  val = e.timeStamp;

  // clientY and clientX will show cooridinates relative to the window in pixels where the user initiated the action
  val = e.clientY;
  val = e.clientX;

  // offsetY and offsetX will show coordinates in pixels relative to the element where the user initiated the action
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}