



let phone = '+1-(408)-555-0105'

let re = /\d/g;
// console.log( typeof phone.match(re));
// console.log(typeof phone.match(re).join('/'));


// Inverse classes

// A character class has an inverse class with the same letter but in thwe uppercase e.g., \D is the inverse of \d.

// The inverse class matches all the other characters. For example, the \D match any character except a digit (or \d). The following are the inverse classes:

// \D – matches any character except a digit e.g., a letter.
// \S – matches any character except a whitespace e.g., a letter
// \W – matches any character except a word character e.g., non-Latin letter or space.
// Back to the phone number example, you can use the \d with the global flag (g):

 phone = '+1-(408)-555-0105';
 re = /\D/g;
//  console.log(phone.match(re).join(''));



 let char = '! @# Pankaj';
 re = /\W/g

//  console.log(char.match(re));


//  The dot (.) character class
// The dot (.) is a special character class that matches any character except a newline:

re = /E.6/
// console.log('ES6'.match(re));

re = /ES.6/
// console.log('ES\n6'.match(re));

re = /ES.6/s
// console.log('ES\n6'.match(re));

re = new RegExp('ES.6' , 's');
// console.log('ES\n6'.match(re));


// Anchors 

let str = 'JavaScripT';
// console.log(/^J/.test(str));
// console.log(/T$/.test(str));

let clockFormat = '12:05';
let isValid = /^\d\d:\d\d$/.test(clockFormat);
// console.log(isValid);


str = 'pankaj Thakur';
re = /^p\w+\s\w*r$/;
// console.log(re.test(str));

re = /^p.*r$/;
// console.log(re.test(str));


// Multiline mode of anchors ^ and $: the m flag
// The default of the anchor ^ or $ is the single-line mode. In the single-line mode, the anchor ^ and $ matches the beginning and the end of a string.

// To enable the multiline mode, you use m flag. In the multiline mode, the ^ or $ anchor matches the beginning or end of the string as well as the beginning or end of lines.

str = `1st time
2nd time 
3rd time`;

re = /^\d/mg;
// console.log(str.match(re));


// Word Boundaries

// The (\b) is an anchor like the caret (^) and the dollar sign ($). It matches a position that is called a “word boundary”. The word boundary match is zero-length.

// The following three positions are qualified as word boundaries:

// Before the first character in a string if the first character is a word character.
// After the last character in a string if the last character is a word character.
// Between two characters in a string if one is a word character and the other is not.


str = 'Hello, JS!';
re = /\bJS\b/;
// console.log(str.match(re));
// console.log(re.test(str));

str = 'Hello, JScript!';
re = /\bJS\b/;
console.log(str.match(re));


// Note that without \b, the /JS/ matches both 'Hello, JS' and 'Hello, JScript':
console.log('Hello, JSscript!'.match(/JS/)); // ["JS"]
console.log('Hello, JS!'.match(/JS/)); // ["JS"]


console.log('ES 2013'.match(/\b\d\d\d\d\b/));

str = 'I start coding JS at 05:30 AM';
re = /\b\d\d:\d\d\b/;
let result = str.match(re);
console.log(result);


str = 'I am legend 1425';
re = /\blegend\b/
console.log(str.match(re));



// Quantifiers
// Quantifiers match a number of instances of a character, group, or character class in a string.

// Quantity
// Exact count {n}
// A number in curly braces {n}is the simplest quantifier. When you append it to a character or character class, it specifies how many characters or character classes you want to match.

// For example, the regular expression /\d{4}/ matches a four-digit number. It is the same as /\d\d\d\d/:



str = 'ECMAScript 2020 21';
re = /\d{4}/g

result = str.match(re);
console.log(result);

str = 'hello hii world my name is pankaj';
re = /\w+/g
console.log(str.match(re));



// The range {n,m}
// The range matches a character or character class from n to m times.
str = 'The official name1 of ES11 is ES2020';
re = /\d{1,4}/g;

// console.log(str.match(re));
// Because the upper limit is optional, the {n,} searches for a sequence of n or more times. For example, the regular expression /\d{2,}/ will match any number that has two or more digits.

 str = 'The official name of ES6 is ES2015';
 re = /\d{2,}/g

 console.log(re.exec(str));
//  console.log(re.exec(str));

 console.log(str.match(re));
 

 let number = `+1-(408)-555-0105`.match(/\d{1,}/g);
 console.log(number);


//  Shorthands   +
// The quantifier {1,} means one or more which has the shorthand as +. For example, the \d+ searches for numbers:

phone =  '+1-(405)-152-226';
result = phone.match(/\d+/g);
console.log(result);

// ?
// The quantifier ? means zero or one. It is the same as {0,1}. For example, /colou?r/ will match both color and colour:

str = 'Is this color or colour'
re = /colou?r/g
console.log(str.match(re));

str = 'https//:30000/local//http';
re = /https?/g
console.log(str.match(re));

// *
// The quantifier * means zero or more. It is the same as {0,}. The following example shows how to use the quantifier * to match the string Java followed by any word character:

str = 'JavaScript is not Java';

re = /Java\w*/g
console.log(str.match(re));

// We often use the quantifiers to form complex regular expressions. The following shows some regular expression examples that include quantifiers:

// Whole numbers:/^\d+$/
// Decimal numbers:/^\d*.\d+$/
// Whole numbers and decimal numbers:/^\d*(.\d+)?$/
// Negative, positive whole numbers & decimal numbers:/^-?\d*(.\d+)?$/


// whole number
re = /^\d+$/
console.log(re.test('123')); // true (whole number)
console.log(re.test('0')); // true (whole number)
console.log(re.test('-123')); // false (negative number)


// Decimal Number
re = /^\d*.\d+$/
console.log(re.test('.125')); // true (decimal Number);
console.log(re.test('-12.34')); // false (decimal Number);


// Whole numeber and decimal numbers 

re = /^\d*(\.\d+)?$/
console.log(re.test('123')); // true (whole number)
console.log(re.test(-12));  // false(negative number)

// neagtive , postive wholenumbers &decimal numbers

re = /^-?\d*(\.\d+)?$/
console.log(re.test('123')); // true (whole number)
console.log(re.test(-12));  // true(negative number)


// Sets
// The square brackets search for any character in a set. For example, [aeiou] matches any of the five characters: 'a', 'e', 'i', 'o' and 'u'. The [...] is called a set.

// For example, the regular expression /[cbr]ats/g matches cats, bats, and rats:

str = 'How cats, rats, and bats became Halloween animals';
re = /[cbr]ats/g;
console.log(str.match(re));


 result = 'It is 🍎'.match(/[🍎🍅🍓]/);

console.log(result);

str = '🍎🍅🍓';

// for(let i = 0 ; i < str.length;i++){
//     console.log(str.charCodeAt(i));
// }



// Regular Expression: Greedy

  let s = '<button type="submit" class = "btn">Send</button>'

  let pattern = /".+"/g;

  result = s.match(pattern);
  console.log(result);

//   How greedy quantifiers work
//   First, the regex engine starts matching from the first character in the string s.
  
//   Next, because the first character < does not match the quote ("), the regex engine continues to match the next characters until it finds the first quote ("):
  
  
//   Then, the regex engine matches the string with the next rule .+ in the regular expression.
  
//   Since the .+ rule matches one or more characters, the regex engine matches the characters until it encounters the end of the string:
  
  
//   After that, the regex engine checks the last rule in the regular expression, which is a quote (“). However, there’s no more character to match because it already reached the end of the string. This means that the regex engine is too greedy by going too far.
  
//   Finally, the regex engine goes back from the end of the string to find the quote (“). This step is often referred to as backtracking.
  
  
//   As a result, the match is the following substring which is not what you might expect:


// To resolve this issue, you need to instruct the quantifier (+) to use the non-greedy (or lazy) mode instead of the greedy mode. To do that, you add a question mark (?) after the quantifier like this:
  

// Non Greedy quantifiers 

 s = '<button type="submit" class="btn">Send</button>'
 pattern = /".+?"/g; 
 
 result = s.match(pattern);
 console.log(result);



 s = '<button type = "submit" class = "btn" id = "1">Send</button>';

 pattern = /".+?"/

 console.log(s.match(pattern));


