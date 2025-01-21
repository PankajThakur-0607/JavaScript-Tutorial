


// Rest Operator (...)
// The rest operator is used in function parameters to collect all remaining arguments into an array. It’s useful for handling an indefinite number of arguments.


// function exampleFunction(...args) {
//     console.log(args);
//   }
  


function sum (...numbers){
    let sum =  numbers.reduce((acc , currVal) => {
      return  acc + currVal;
    },0)
    return sum;
}

function multiply (...numbers){
    return numbers.reduce((acc , currVal) => acc * currVal , 1);
}

console.log(sum(1,2));
console.log(multiply(2,3 , 4 , 5 ));


function greet (greeting , ...names){
    return `${greeting},${names.join(' ,')}`;
}

console.log(greet('hello' , 'pankaj' , 'Loves ' , 'Monika'));

const user = {
    firstName: "Oluwatobi",
    lastName: "Sofela", 
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
}

const { firstName, lastName, ...otherInfo } = user;

console.log(otherInfo);







// Spread Operator (...)
// The spread operator is used to unpack elements of an array or object into individual elements. It’s useful for copying arrays, combining arrays, or spreading properties of objects.

let arr1 = [1,2,3];
let arr2 = [...arr1 , 4 ,5];
let arr3  = [...arr1 , ...arr2];

console.log(arr3);

let obj1 = {a : 1 , b : 2 , c : 3};
let obj2 = {...obj1 , d : 4} ;
console.log(obj2); 



const myName = "Pankaj Thakur" ;
console.log([...myName]);

const nestedArray = [1, [2, 3], [4, [5, 6, [7,[8]]]]];
// console.log(...nestedArray);

// console.log(nestedArray.flat(Infinity));