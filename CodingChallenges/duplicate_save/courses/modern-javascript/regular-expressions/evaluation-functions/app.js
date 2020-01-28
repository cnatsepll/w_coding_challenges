// initailize regular expression variable
let re;
// each character is a litteral character
re = /hello/i;
// this will display the text with slashes
console.log(re);
// this will display the text within the slashes
console.log(re.source);

// exec() - returns the result in an array if there is a match, or null if there is no match
// as long as a word matches in our input and comparision strings we will be returned with an index on where the match began
const result = re.exec('hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);


// test() - returns true if there is a match and false if there isnt
// this test will return false
// the test is case sensitive
// we can make it pass by including an i in the regular expression
// re = /hello/i
const result2 = re.test('Hello');
console.log(result2);


// match() - returns result array or null
const str = 'Hello There';
const result3 = str.match(re);
console.log(result3);


// serach() - returns index of the first match if not found returns negative one (-1)
const str2 = 'Hello There';
result4 = str2.search(re);
console.log(result4);

// replace() - returns a new string with some or all matches of a pattern
const str3 = 'Hello There';
const newStr = str3.replace(re, 'Hi');
console.log(newStr);

