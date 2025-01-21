
//Activity 1 
// let myName  = 'Pankaj Thakur';
// let age = 21;
// let result = `My Name is ${myName} and My Age is : ${age}`
// console.log(result);

const  multiLine = `hello 
mu name
is pankaj `;

console.log(multiLine);


// Activity 2 Destructuring 
let arr = [1,2,3,4,5];
let [one , two ] = arr;
console.log(one);
console.log(two);

let obj = {
    name : 'pankaj' ,
    title : 'beyound luck' ,
    author : 'Pankaj thakur'
}

let {title : t , author : a}  =obj;
// console.log(title );
// console.log(author);
// console.log(a);

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };
  
  const { title, author } = book;
  console.log(`Title: ${title}, Author: ${author}`);
  

// Activity 2 

let arr1 = [1,2,3,4,5,6,7,4,6];
let arr2 = [7,4,6];
let arr3 = [...arr1 ,...arr2 , 11];
console.log(arr3);


function sum(...value){
    return value.reduce((acc , currVal) => acc + currVal , 0);
}

console.log(sum(1,2,3,4,5));

function multiply(a  , b = 1){
    return a * b;
}
console.log(multiply(5 , 3));
console.log(multiply(3));


// Activity 5 ;

let userName = 'Monika' , age = 21;

const  person = {
    userName , 
    age ,
    greet() {
        console.log(`Hello! My Name is ${this.userName} and age is ${this.age}`);
    }
}

console.log(person);
person.greet();


let properyName  = 'status';
let value = 'active';

const dynamicObj = {
    [properyName] : value,
    display() {
        console.log(`Property: ${properyName} , value: ${this[properyName]}`);
    }
}

console.log(dynamicObj);
dynamicObj.display()


let name = 'machine name';
let machine = {
    [name] : 'server',
    'machine hour' : 1000
};
console.log(machine[name]);
console.log(machine['machine hour']);
