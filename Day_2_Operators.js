// Activity 1 

let x  = 11 ; 
let y = 6 ; 

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);


x += 3;
// console.log(x);
y -= 3;
// console.log(y);



// Equality Operators

// Loose Equality (==): Compares two values for equality, performing type coercion if necessary.

// console.log(5 == '5');   // true (because '5' is coerced to number 5)
// console.log(0 == false); // true (0 is coerced to false)
// console.log(null == undefined); // true


// Strict Equality (===): Compares two values for equality without performing type coercion.

// console.log(5 === '5');  // false (different types: number vs. string)
// console.log(0 === false); // false (different types: number vs. boolean)
// console.log(null === undefined); // false (different types)



// Inequality Operators

// Loose Inequality (!=): Compares two values for inequality, performing type coercion if necessary.
// console.log(5 != '5');   // false (because '5' is coerced to number 5)
// console.log(0 != false); // false (0 is coerced to false)
// console.log(null != undefined); // false



// Strict Inequality (!==): Compares two values for inequality without performing type coercion.
// console.log(5 !== '5');  // true (different types: number vs. string)
// console.log(0 !== false); // true (different types: number vs. boolean)
// console.log(null !== undefined); // true (different types)



// 3. Relational Operators
// Greater Than (>): Checks if the left value is greater than the right value.

// console.log(10 > 5);  // true
// console.log(5 > 10);  // false
// console.log('apple' > 'banana'); // false (comparison based on Unicode values)


// Greater Than or Equal To (>=): Checks if the left value is greater than or equal to the right value.

// console.log(10 >= 5); // true
// console.log(5 >= 10); // false
// console.log(5 >= 5);  // true


// Less Than (<): Checks if the left value is less than the right value.
// console.log(5 < 10);  // true
// console.log(10 < 5);  // false
// console.log('apple' < 'banana'); // true (comparison based on Unicode values)


// Less Than or Equal To (<=): Checks if the left value is less than or equal to the right value.
// console.log(5 <= 10); // true
// console.log(10 <= 5); // false
// console.log(5 <= 5);  // true



// Activity 4  

// 1. Logical AND (&&)
// Description: Returns true if both operands are true. If any operand is false, it returns false. It also uses short-circuit evaluation, meaning it stops evaluating as soon as it finds the first false.

// Syntax: expression1 && expression2
let a = 10;
let b = 20;

// console.log(a > 5 && b < 25); // true (both conditions are true)
// console.log(a > 15 && b < 25); // false (first condition is false)


// 2. Logical OR (||)
// Description: Returns true if at least one of the operands is true. It returns false only if both operands are false. It also uses short-circuit evaluation, meaning it stops evaluating as soon as it finds the first true.

// Syntax: expression1 || expression2

// let x1 = 5;
// let y1 = 15;

// console.log(x1 > 10 || y1 < 20); // true (second condition is true)
// console.log(x1 > 10 || y1 > 20); // false (both conditions are false)

// 3. Logical NOT (!)
// Description: Inverts the boolean value of the operand. It returns true if the operand is false and false if the operand is true.

// Syntax: !expression

// let isRainy = false;

// // console.log(!isRainy); // true (inverts false to true)
// console.log(!(isRainy || true)); // false (inner expression is true, so NOT makes it false)


// 4. Logical XOR (exclusive OR) (^ in bitwise operations)
// Description: JavaScript does not have a direct logical XOR operator. However, you can achieve XOR behavior with the combination of && and || operators. XOR returns true if exactly one of the conditions is true, but not both

// Syntax
// let xor = (a || b) && !(a && b);

let isNum  = true;
let isPaid = true;

// console.log((isNum || isPaid ) && !(isNum && isPaid));



// Activity 5 ;

// Syntax 
// condition ? expression1 : expression2;
let a1 = -1 
let cdn = a1 < 0  ? true : false;
console.log(cdn);





























