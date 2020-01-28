// EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// });

// EVENT DELEGATION
// 'Putting the listener on the parent of what youre looking for, 
// then using a condition to find the target and doing your functionality with that element'
// needs to be used if there is more than one item that meets qualifications
// or if you need to select an element that wasnt there when the page was loaded
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}