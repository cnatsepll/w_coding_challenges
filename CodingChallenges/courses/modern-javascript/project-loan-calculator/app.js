// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // hide results
  document.getElementById('results').style.display = 'none';
  // show loader when submit is clicked
  document.getElementById('loading').style.display = 'block';
  // start to calculate results after 2 seconds
  setTimeout(calculateResults, 2000);


  e.preventDefault();
});


function calculateResults(){
  console.log('Calculating.....')
  // UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPaymnent = document.getElementById('monthly-payment');
  const totalPaymnet = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // get the value of the amount field as a float
  const principal = parseFloat(amount.value);
  // get the value of the interest field as a float, then divide it by 100 then divide it by 12
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  // calculate how many payments will be made, 12 per year 
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  // Math.pow is an exponential function
  // it takes two values (base, exponent) a number to multiply and the number to increase it by the power of
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  // some fancy math
  const monthly = (principal * x * calculatedInterest) / (x-1);

  // checking to make sure that monthly is a finite number
  if(isFinite(monthly)){
    // inserting the value of the monthly variable into the html input property assigned to monthly payment
    // toFixed(2) is assigning the number of decimals allowed on the monthly variable
    // same with totalPayment and totalInterest
    monthlyPaymnent.value = monthly.toFixed(2);
    totalPaymnet.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    // show results
    document.getElementById('results').style.display="block";
    // hide loader after results are generated
    document.getElementById('loading').style.display = "none";
    // if monthly isnt finite
  } else {
    showError('Please check all inputs have valid numbers');
  }
}

// Show Error
function showError(error) {
  // hide loader if no results are generated
  document.getElementById('loading').style.display = "none";
  // hide results if no results are generated
  document.getElementById('results').style.display = "non";
  // Create a div
  const errorDiv = document.createElement('div');
  // get related elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // add a class
  errorDiv.className = 'alert alert-danger';
  // create a text node and append to div
  // so we've created the document element div with error div
  // now we are going to append on a text node containing our error message to that created div
  errorDiv.appendChild(document.createTextNode(error));
  // insert error above heading
  // taking the parent element which is the card
  // then we use the insert before function call to place our error above the heading
  // call it on a parent, then insert the element you want to append, 
  // and then the element in that parent to place it before
  card.insertBefore(errorDiv, heading);
  // clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}