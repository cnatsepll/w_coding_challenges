// WINDOW METHOD OBJECTS AND PROPERTIES

// technically
// console.log()
// is the same as 
// window.console.log()

// ALERT
// alert('hello world')


// PROMPT
// same as an alert but it also takes an input
// const input = prompt();
// alert(input);


// CONFIRM
// produces a message box with OK and CANCEL
// if the user selects OK then the 'confirm' will be true and the if statement will fire
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }


// GETTING VARIABLES ABOUT THE WINDOW ELEMENT
let val;

// Outer height and width of the window (from the outer edges)
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width of the window (inside the scrollbars)
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points
// finding out how far down or across the page the user is
// this can be used to set points of where to load animations or images as the user scrolls closer to them
val = window.scrollY;
val = window.scrollX;

// Location Object
// gets information from the window about how it got there
// host name, port information, stuff like that
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// REDIRECT
// using the location object to redirect to another url
// usually used for internal urls but can also be external
// window.location.href = 'http://google.com';

// RELOAD
// will reload the page 
// usually used inside of a function
// if done gloabally like it is listed below it will reload the page over and over infinitely until stopped
//window.location.reload();

// HISTORY OBJECT
// can take us to pages in the browser history 
// -2 will take us back two pages earlier from where we are now
//window.history.go(-2);
// we can also get the number of pages a user has visited with the window history length object
val = window.history.length;

// NAVIGATOR OBJECT
// gets all the information about the browser and can even get info on the users's OS
val = window.navigator;
// browser info
val = window.navigator.appName;
val = window.navigator.appVersion;
// computer info
val = window.navigator.userAgent;
// win32 = windows, darwin = mac
val = window.navigator.platform;
// who owns the browser (Google, Mozilla)
val = window.navigator.vendor;
// language
val = window.navigator.language;


console.log(val);