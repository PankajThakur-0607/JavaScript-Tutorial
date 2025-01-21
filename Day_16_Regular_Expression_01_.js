


// Creating a regular expression

// To create a regular expression in JavaScript, you enclose its pattern in forward-slash characters (/) like this:

let re = /hi/;

// Or you can use the RegExp constructor:
let reg = new RegExp('hi');
// Both regular expressions are instances of the RegExp type. They match the string 'hi'.



// The test() method returns true if the string argument contains a match.
let regrex = /hi/;
let result = regrex.test('hi Pankaj');

// console.log(result);


// Using pattern flags
// Besides a pattern, a RegExp object also accepts an optional flag parameter. Flags are settings that change the searching behavior. Regular expressions have many flags.

// 1) The ignore flag (i)

re = /hi/i;
result = re.test('Hi John');
// console.log(result); // In this example, the /hi/i will match any string hi, Hi, and HI. Notice that you place the flag i after the last forward-slash character (/)


// The following example shows how to use the flag in the RegExp constructor:

re = new RegExp('hi' , 'i');
result = re.test('HI JOHN');
// console.log(result);


// 2) The global flag (g)

let message = 'Hi , are you there? hi, HI';
 re = /hi/gi;   

 let matches = [] ;
 let match ;
 do {
    match = re.exec(message);
    if(match){
        matches.push(match);
    }
 } while (match);

// console.log(matches);



let regex = /cat/;
let str = 'the cat is on the roof';
 result = regex.exec(str);
//  console.log(result);

let regexGlobal = /cat/g;
let strGlobal = 'cat and cat';
let resultGlobal = regexGlobal.exec(strGlobal);

// console.log(resultGlobal);

const secondResult = regexGlobal.exec(strGlobal);
// console.log(secondResult);

// Searching strings 
// The method str.match(regexp) returns all matches of regexp in the string str.

str = "Are you OK ? Yes , I'm Ok";
result = str.match(/OK/);

// console.log(result);


let regexMatch = /cat/ ;
let strMatch = 'the cat is on the ceiling';

resultMatch = strMatch.match(regexMatch);

// console.log(resultMatch);


// Example Global Flag 
let regexMatchGlobal = /cat/g;
let strMatchGLobal = 'cat and cat';
let resultMatchGlobal = strMatchGLobal.match(regexMatchGlobal);

// console.log(resultMatchGlobal);
// Output: ["cat", "cat"]

// Replacing strings
// The following example uses the replace() method to replace the first occurrence of the string 'Ok' in the string str:

str = "Are you OK ? Yes , I m OK";
result = str.replace(/Ok/ , 'fine');

// console.log(result);

str = "Are you OK ? Yes , I, am OK.";
result = str.replace(/OK/g , 'pankaj');
// console.log("Answer is : " , result);


str = "Are you pankaj ? Yes ,";
result = str.replace(/Pankaj/ig,'fine');
// console.log(result);



let phone = '+1-(408)-555-0105';
re = /\d/;
console.log(phone.match(re));


phone = '+1-(408)-555-0105';
re = /\d/g;
console.log(phone.match(re));


phone = '+1-(408)-555-0105';
re = /\d/g;

let numbers = phone.match(re);
let phoneNo = numbers.join('');

console.log(phoneNo);

// To make it short, you can chain the match() and join() methods like this:


console.log(
    phone
    .match(re)
    .join('')
);


phone = '0';
re = /\d/
console.log(phone.match(re));


str = '02 is 02 oxygen';
re = /\w\d/

console.log(str.match(re));


// \s – Match a Single Whitespace Character:

// This matches any whitespace character, including spaces, tabs (\t), and newlines (\n).

regex = /\s/;
str = 'hello world!';
result = str.match(regex);
// console.log(result); // Output : [" "]


regex = /\s/g;
str = "Hello World Pankaj Wlcm To ";
result = str.match(regex);

// console.log(result);


// \w – Match a Word Character:

// This matches any word character from the Latin alphabet (A-Z, a-z), digits (0-9), and the underscore (_). It does not match special characters like punctuation or spaces.

regex = /\w+/g;
str = "!Pankaj Thakur";
result = str.match(regex);
console.log(result);  // Output : ["H"];


regex = /^\w+$/;
const str1 = "user_name123"; // Valid username
const str2 = "user-name";  
// console.log(regex.test(str1));
// console.log(regex.test(str2));


regex = /\w\d\d/ ;
str = "_02 12 16" ;
result = str.match(regex)
console.log(result);

// A pattern may contain both regular characters and character classes. For example, the ES\d regular expression matches ES followed by a digit like ES6:

str = 'ES6 Tutroial ES9';
re = /ES\d/g

console.log(str.match(re));




















