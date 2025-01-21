
// Introduction to JavaScript regex lookahead
// In regular expressions, a lookahead allows you to match X but only if it is followed by Y.

// Here’s the syntax of the lookahead:

// X(?=Y)
// In this syntax, the regex engine searches for X and only matches if it is followed by Y.

// For example, suppose you have the following string:
// And you want to match the number 15 followed by a space and the literal string feet, not the number 1. To do that, you can use a lookahead in a regular expression:

let s = '1 car is 15feet long 16 and feet';
let pattern = /\d+(?=\s*feet)/;

const match = s.match(pattern);
console.log(match);

s = '1 car is 15 feet long';

pattern = /\d+(?=\s*)(?= feet)/;
console.log(s.match(pattern));


let details = "Item1: $100, Item2: $150, Item3: $200";
pattern = /(?<=\$)\d+(?=,)/g;
console.log(details.match(pattern));




// Regex negative lookaheads
// Suppose you want to match the number 1 but not the number 15 in the following string:

// const s = '1 car is 15 feet long';

// To do that, you use a negative lookahead. Here’s the syntax of the negative lookahead:

// X(?!Y)

// In this syntax, the regex engine matches X only if it is not followed by Y.
s = '1 car is 15 feet long';
pattern = /\d+(?!\s*feet)/;
console.log(s.match(pattern));


// Summary
// A regex lookahead X(?=Y) matches X only if it is followed by Y.
// A negative regex lookahead X(?!Y) matches X only if it is not followed by Y.




// Introduction to the JavaScript regex lookbehind
// In regular expressions, a lookbehind matches an element if there is another specific element before it. A lookbehind has the following syntax:

// (?<=Y)X
// In this syntax, the pattern match X if there is Y before it.

// For example, suppose you want to match the number 900 not the number 1 in the following string:

// '1 computer costs $900'


s = '1 computer costs $900';
pattern = /(?<=\$)\d+/;
console.log(s.match(pattern));


// Negative lookbehind
// To negate a lookbehind, you use a negative lookbehind with the following syntax:

// In this syntax, the regex engine matches X if there is no Y before it. The following example uses a regular expression with a negative lookbehind to match a number that doesn’t have the $ letter before it:

s = '1 computer costs $900';
pattern = /(?<!\$)\d+/;
console.log(s.match(pattern));




// Summary
// A lookbehind (?<!Y)X matches X only if is is preceded by Y.
// A negative lookbehind (?<!Y)X matches X only if it is not preceded by Y.


// multiple lookahead 
let regex = /bat(?=man)(?=.*s)/; // X is "bat", Y is "man", and Z is "s"

// Test strings
 let str1 = "batman";
 let str2 = "batmans";
 let str3 = "bats";
const str4 = "batmobile";
console.log(regex.test(str1)); // false (because "batman" does not have "s" after "man")
console.log(regex.test(str2)); // true (because "batmans" has "bat" followed by "man" and then "s")
console.log(regex.test(str3)); // false (because "bats" does not have "man" after "bat")
console.log(regex.test(str4)); // false (because "batmobile" does not have "man" after "bat")
