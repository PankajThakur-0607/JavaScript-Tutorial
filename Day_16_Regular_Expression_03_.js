

// Capturing groups


let path = 'posts/10'; 
let pattern = /\w+\/\d+/;

// console.log(path.match(pattern));

pattern = /\w+\/(\d+)/g;
let result = pattern.exec(path);
// console.log(result); // Output: [ 'posts/10', '10' ]

pattern = /\w+\/(\d+)/g;
result = [...path.matchAll(pattern)];
// console.log(result); // Output: [ [ 'posts/10', '10' ] ]


// Multiple capturing groups
// To capture both the resource (posts) and id (10) of the path (post/10), you use multiple capturing groups in the regular expression as follows:

path = 'posts/10';
pattern = /(\w+)\/(\d+)/;

let match = (path.match(pattern));

console.log(match);
console.log(match[0],'-->' , match[1], '---> ' , match[2]);



path = 'posts/20/hello';
pattern = /(\w+)\/(\d+)\/(\w+)/;
console.log(path.match(pattern));

const regexp = /foo[a-z]*/g;
const str = "table football, foosball food";
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `Found ${match} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
} 
// // Found football start=6 end=14.
// // Found foosball start=16 end=24.

// // matches iterator is exhausted after the for...of iteration
// // Call matchAll again to create a new iterator
console.log(Array.from(str.matchAll(regexp), (m) => m[0]));
// // [ "football", "foosball" ]



// Named Capturing groups 

// To access a subgroup in a match, you use an index. However, you may want to access a subgroup by a meaningful name to make it more convenient.

// To do that, you use the named capturing group to assign a name to a group. The following shows the syntax for assigning a name to a capturing group:

// (?<name>rule)
// Code language: JavaScript (javascript)
// In this syntax:

// () indicates a capturing group.
// ?<name> specifies the name of the capturing group.
// rule is a rule in the pattern.
// For example, the following creates the names:

// /(?<resource>\w+)\/(?<id>\d+)/

// In this syntax:
// The resource is the name for the first capturing group
// The id is the name for the second capturing group.


path = 'posts/10/hii';
pattern = /(?<resource>\w+)\/(?<id>\d+)\/(?<greet>\w+)/;

console.log(path.match(pattern));

result =  path.match(pattern);

for(const name in result.groups){
    // console.log(name , result.groups[name]);
} 




path = 'posts/2024/09/29';
pattern = 
    /(?<resource>\w+)\/(?<year>\d+)\/(?<month>\d+)\/(?<day>\d+)/

    // console.log(path.match(pattern));


    // Introduction to JavaScript regex backreferences

    // Backreferences allow you to reference the capturing groups in the regular expressions.
    //  Technically speaking, backreferences are like variables in regular expressions.


    let s = 'JavaScript Javascript is awesome'
     pattern = /(\w+)\s+\1/i;
     result = s.replace(pattern , '$1');
    //  console.log(result);


     s = 'Hello , Hello Monika';    
    pattern = /\b(\w+)\b\s*,?\s+\b\1\b/i;
    result = s.replace(pattern , '$1')
    // console.log(result);



    let message = `"JavaScript's cool". They Said`;
    pattern = /([\'"]).*?\1/
    // console.log(message.match(pattern));


    // Back Referneces 

    let text1 = "hello hello world";
    let pattern1 = /\b(\w+)\b \1/g;  // \1 is the backreference to the first captured word

    let result1 = text1.match(pattern1);
    // console.log(result1);  // Output: ["hello hello"]


     text1 = 'hello world hello';
     pattern1 = /\b(\w+)\b.*\b\1\b/g;  // Modified pattern
    //  console.log(text1.match(pattern1));


    //  Example 3 : Matching Palindrome

    text1 = "madam noon racecar";
    pattern = /\b(\w)(\w+)?\1\b/g;
    // console.log(text1.match(pattern));
    


    text = 'hello pankaj my name is hello ,, hello';
    pattern = /hello/g
    // console.log(text.match(pattern));


    let greet = 'ello hankaj';
    let re = /h/gi;
    console.log(re.exec(greet));
    console.log(re.lastIndex); // 6
    


    const  words = ['apple' , 'orange' , 'strawberry'];

    pattern = /\w*(\w)\1\w+/;

    for (const word of words) {
        const result = word.match(pattern);

        if(result){
          console.log(result[0], '-->' , result[1]);
        }
    }



    // Introduction to the regex alternation
// Regex uses the pipe operator (|) to represent an alternation, which is like the logical OR operator in regular expressions. The alternation allows you to match either A or B:


s = ' JS JavaScript and JS';
pattern = /JavaScript|JS/;

console.log(s.match(pattern));





const time = '05:45 31:62 23:56 36:99 23:59 24:00 00:01';
pattern = /([01]\d|2[0-3]):([0-5]\d)/g

console.log(time.match(pattern));



    





