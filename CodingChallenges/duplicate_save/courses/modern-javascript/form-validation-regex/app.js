
// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName(){
  const name = document.getElementById('name');
  // regex to check for valid name
  // does the string start with an alphabetical character
  // and does it have an alphabetical character for at least 2 to 10 positions
  const re = /^[a-zA-Z]{2,10}$/;
  // if the element value in the name input does not match our regex standards
  // then we let the user know by adding a warning class otherwise we process the entry
  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
function validateZip(){
  const zip = document.getElementById('zip');
  // regex to check that a value is going to meet valid zip code criteria
  // the value must be 5 numeric characters
  // and may optionally be followed by a dash and then 4 numeric characters
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}
function validateEmail(){
  const email = document.getElementById('email');
  // regex to check that a value is going to meet valid email criteria
  // first set of parens is checking for an aplhabetical, number, underscore, or dot character 
  // to start the email, the plus sign is asking for one or more
  // then we look for an @ symbol
  // then we look again for the same thing as the beginning group
  // then we look for a period, dot (this character is escaped)
  // and finish it off by looking for the email close (.com, .net, .dev, whatever) 2 to 5 characters long
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
function validatePhone(){
  const phone = document.getElementById('phone');
  // regex to check that a value is going to meet valid phone criteria
  // phone numbers can be entered in with all number, or numbers and spaces, or with parens
  // there are lots of ways that users may be expecting to enter in their numbers so we will 
  // try and account for as many as seem reasonable
  // here we are checking for 3 characters that are digits, with the option to be surrounded by parens
  // then we accept an optional dash dot or space
  // then 3 digits
  // then another optional dash dot or space
  // then 4 final digits
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}