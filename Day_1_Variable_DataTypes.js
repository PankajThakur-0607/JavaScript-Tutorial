// let x = 5 ; 
// let y = 6;
// console.log(x+y);


// Activity 1 

var hello = 1;
// console.log(hello);
let str = "Hello0";
// console.log(str);

// Activity 2 

const isValid = true;
// console.log(isValid);

//Activity 3
let one = 1;
let two = "hello" ;
let three = true;
let four =  [1,2,3,4];
let five = {
    name : "pankaj",
    div : "7A11",
    rollNO : 210306105081
}

// console.log(typeof one);
// console.log(typeof two);
// console.log(typeof three);
// console.log(typeof four);
// console.log(typeof five);

//  Activity 4 
// let myName = "Pankaj Thakur";
// console.log(myName);


// myName = "Sagar Singh";
// console.log(myName);


// Activity 5 

// Example 1: Reassigning a const Variable (Primitive Type)
// const  newName = "J.p Bhai";
// console.log(newName);

// // newName = "Pankaj";
// // console.log(newNameame);



//  Example 2: Modifying a const Object (Non-Primitive Type)
// const person = { name: "John", age: 30 };
// console.log(person);  // Output: { name: "John", age: 30 }

// // This is allowed. We can modify the properties of the object.
// person.age = 31;
// console.log(person);  // Output: { name: "John", age: 31 }

// // This is NOT allowed. Reassigning the constant reference will throw an error.
// person = { name: "Doe", age: 40 };  // TypeError: Assignment to constant variable.


// Example 3: const and Arrays

const numbers = [1, 2, 3];
console.log(numbers);  // Output: [1, 2, 3]

// Allowed: Modifying the array content
numbers.push(4);
console.log(numbers);  // Output: [1, 2, 3, 4]

// Not Allowed: Reassigning the constant array
numbers = [5, 6, 7];  // TypeError: Assignment to constant variable.
