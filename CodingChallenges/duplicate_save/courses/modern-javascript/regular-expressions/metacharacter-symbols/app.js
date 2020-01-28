let re;
// litteral characters
re = /hello/;
re = /hello/i;


// metacharacter symbols
re = /^h/i // must start with 'h', case insensitive
re = /d$/i // must end with 'd', case insensitive
re = /^hello$/i  // must begin and end with 'hello, hello would be the only word in the string
re = /h.llo/i // the '.' is saying this position can be any one character and still match
re = /h*llo/i // the '*' is saying this position can match any chracter zero or more times
re = /gre?a?y/i // the '?' is saying the character before it is optional, this is saying grey can also be spelled gray or gry
re = /gre?a?y\?/i // the '\?' is escaping the special character '?' so that we can include it as a litteral in our string

// Brackets [] - Character Sets
re = /gr[ae]y/i // the character in the bracket position must either be 'a' or 'e'
re = /[GF]ray/ // same as above but without the 'i' to make it case senstitive
re = /[^GF]ray/ // introducing the carrot flips the opperation, Matches anything except 'G' or 'F'
// if the carrot were outside of the brackets then it would mean it would have to start with either 'G' or 'F'
re = /[A-Z]ray/ // matches any uppercase letter
re = /[a-z]ray/ // matches any lowercase letter
re = /[A-Za-z]ray/ // matches any letter
re = /[0-9]ray/ // matches any digit '0' to '9', we can set this range to whatever we want

// Braces {} - Quantifiers
re = /Hel{2}o/i // specifies that there must be two of the character before it in this position, we can set any character
re = /Hel{2,4}o/i // specifies there must be at least '2' and at maximum '4' 'l's in this position to match
re = /Hel{2,}o/i // specifies there must be at least '2' in this position to match

// Parenthesis () - Grouping
re = /^([0-9]x){3}$/ // This is saying we want any digit, then an 'x', 3 times in a row
// with the carrot and the money sign we are specifying that the entire string must meet these parameters
 
// Shorthand Character Classes
re = /\w/i // '\w' Word Character - alphanumeric character or '_' (underscore)
re = /\w+/i // '\w+' looks at one or more, here we are looking at one or more word characters
re = /\W/ // '\W' captial 'W' is looking for any Non-Word character, opposite of lowercase 'w'
re = /\d/ // '\d' Digit Character matches any digit character
re = /\d+/ // '\d+' matches any digit character one or more times
re = /\D/ // '\D' Non Digit Character matches any Non Digit character, opposite of lowercase 'd'
re = /\s/ // '\s' White Space Character matches a white space character (space, tab, null)
re = /\S/ // '\S' Non White Space Character matches any non white space character
re = /Hell\b/i // '\b' Word Boundary makes sure the match is not inside of another word, this would not match 'Hello'

// Assertions
re = /x(?=y)/ // Matches 'x' only if it is followed by 'y'
re = /x(?!y)/ // Matches 'x' only if it is NOT folllowed by 'y' 




// test regex
re = /([A-Z][A-Z])\1{1}/


// string to match
const str1 = 'AB';
const str2 = 'ABAB';
const str3 = 'ABABAB';

//log results
const result = re.exec(str1);
console.log(result);


function reTest(re, str) {
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`); 
  } else {
    console.log(`${str} does NOT match ${re.source}`); 
  }
}

reTest(re, str1);
reTest(re, str2);
reTest(re, str3);

