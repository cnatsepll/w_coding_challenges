let val;

// new Date() will use todays date as a default 
// Date will return an object
const today = new Date();
val = today;

// we can also specify a date, both ways work
let birthday = new Date('9/11/1990 11:25:00');
birthday = new Date('September 11 1990');

// if we want we can change that Date object to a string
val = today.toString();


// getting year
val = today.getFullYear();
// getting month
val = today.getMonth();
// getting date, what numbered day of the month it is (23rd) stuff like that
val = today.getDate();
// getting the day of the week
// returns a number. 0 = sunday, 1 = monday, etc.
val = today.getDay();
// getting hours
val = today.getHours();
// getting minutes
val = today.getMinutes();
//getting seconds
val = today.getSeconds();
//getting miliseconds
val = today.getMilliseconds();
// get the time of the specified date from january 1970 in miliseconds
val = today.getTime();

// WE CAN USE THE ABOVE FUNCTIONS AS SET METHODS AS WELL
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
