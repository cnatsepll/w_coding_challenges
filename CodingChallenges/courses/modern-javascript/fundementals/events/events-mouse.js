const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// CLICK
clearBtn.addEventListener('click', runEvent);
// DOUBLE CLICK
clearBtn.addEventListener('dblclick', runEvent);
// MOUSEDOWN
clearBtn.addEventListener('mousedown', runEvent);
// MOUSEUP
clearBtn.addEventListener('mouseup', runEvent);
// mouseenter, mouseover, mouseleave, and mouseout are all very similar events
// the key difference being that mouseover, mouseleave will fire when the mouse hovers over any other element in the defined space, and mouseenter mouseleave will only fire once when it enters and once when it leaves
// MOUSEENTER
card.addEventListener('mouseenter', runEvent);
// MOUSELEAVE
card.addEventListener('mouseleave', runEvent);
// MOUSEOVER
card.addEventListener('mouseover', runEvent);
// MOUSEOUT
card.addEventListener('mouseout', runEvent);
// MOUSEMOVE
// fires anytime the mouse is moving inside of the specified element
card.addEventListener('mousemove', runEvent);



// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  // we will display the coordinates of the mouse moving in the header
  heading.textContent = `MouseX: ${e.offsetX}  MouseY: ${e.offsetY}`;
  // with our collected corrdinates we will set a new background color
  document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 40)`
}
