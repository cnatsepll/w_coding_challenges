const user = {email: 'jdoe@gmail.com'};

// try catch is great because it allows the program to continue functioning even if there is an error
try {
  // playing with custom errors for situational circumstances
  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name')
  }


  // produces a Reference Error since there is no function named myFunction
  myFunction();
} catch (error) {
  // we updated the error string above in the new SyntaxError and that will be passed down to the catch
  console.log(`User error: ${error.message}`);
  
  // full error
  console.log(error);
  // error message
  console.log(error.message);
  // error name
  console.log(error.name);
  // check error type
  console.log(error instanceof ReferenceError);
  // check error type
  console.log(error instanceof TypeError);
// finally runs no matter what the result of anything above it was
} finally {
  console.log('finally runs regardless of result')
}


// showing that the app will continue running after an error has been caught
console.log('program continues');
