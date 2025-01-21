// Template literals in JavaScript are string literals that allow embedded expressions and multi-line strings. They were introduced in ES6 (ECMAScript 2015) and provide a more powerful and flexible way to work with strings. Template literals are enclosed by backticks (`) instead of single (') or double (") quotes.

// Key Features of Template Literals:
// Multi-line Strings: Template literals preserve the newlines in strings, which is useful for creating multi-line strings without needing to use escape characters.

// Embedded Expressions: You can embed expressions inside a template literal using the ${...} syntax. This allows for dynamic string generation.

// Tagged Templates: Template literals can be used with a "tag" function to perform custom processing of the string. This feature is useful for creating DSLs (Domain Specific Languages), internationalization, and more.


// examples 
// 1. Multi-line Strings


const  multiLineString = `this is  a string
that spans multiple
lines
`;

console.log(multiLineString);

// 2. Embedded Expressions
// You can use expressions inside ${} placeholders.

const  name = 'Pankaj Thakur';
const age = 25 ; 
const  greeting = `Hello, My name is ${name} and I am ${age} years Old`;

console.log(greeting);

// 3. Expressions with Functions
const  price = 100 ;
const tax = 0.18;
const  totalPrice = `The total price is ${price + (price * tax)}`
console.log(totalPrice);

// 4. Tagged Templates
// Tagged templates allow you to parse template literals with a function. For example:

function highlights(string , ...value){
    let output =  string.reduce((acc , currVal , idx) => {
        return`${acc}${currVal}<b>${value[idx] || ''}</b>`
    },'')
    return output;
}

const activity = 'running';
const study = 'Parul University ';

const result = highlights`my Name is ${name} and i enjoy ${activity} and i Study in ${study}`


console.log(result);


