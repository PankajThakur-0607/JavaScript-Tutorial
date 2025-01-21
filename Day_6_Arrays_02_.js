const myArr = [1, 2, 3, 4, 5];
const events = myArr.filter(function (arr) {
  return arr % 2 === 0;
});
// console.log(events);

const students = [
  { name: "Pankaj", grade: 89 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];

const studentGrade = students.filter(function (stud) {
  return stud.grade >= 90;
});

// console.log(studentGrade);

// Reduce function

const nums = [1, 2, 3, 4];

let newNum = nums.reduce(function (acc, curr) {
  return acc + curr;
});

// console.log(newNum);

let pets = ["dog", "chicken", "cat", "chicken", "rabbit", "dog", "chicken"];

let petCount = pets.reduce(function (currPet, pet) {
  if (!currPet[pet]) {
    currPet[pet] = 1;
  } else {
    currPet[pet]++;
  }
  return currPet;
}, {});

// console.log(petCount);

// For Each Loop
// const  fruits = ['apple' , 'banana' , 'cherry'];

// fruits.forEach((fruit , index , array) => {
//     // console.log(`Index ${index} has ${fruit} in array ${array}`);
//     // return fruit;
// })

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index, array) {
  array[index] = number * 2;
});

// console.log(numbers);

const stop = [1, 2, 3, 4, 5];
stop.forEach(function (s) {
  if (s === 3) {
    // This won't stop the loop
    return;
  }
  // console.log(s);
});

// Using this Arg  in for Each Loop

const multiplier = {
  factor: 2,
  multiply: function (number) {
    return number * this.factor;
  },
};

let table = [1, 2, 3, 4, 5];

// table.forEach(function (t) {
//   console.log(this.multiply(t));
// }, multiplier);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Array.join()
// const joinStr = fruits.join('-');
// console.log(joinStr);
// console.log(typeof joinStr);

// // Array.pop()
// let fruit = fruits.pop(); // remove from the last
// console.log(fruit);

// // Array.push ()
// fruits.push("kiwi"); // add in the last
// fruits.push("guava");
// console.log(fruits);

// // Shifting ()
//   fruits.shift() // remove first elm

// // unshift()
//   fruits.unshift('Lemon'); // add first elm

// delete()  // dont use it as it leaves the hole in array while deleting

// console.log(fruits);
// delete fruits[0];
// console.log(fruits);

// // Concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// console.log(myBoys.concat(myGirls));

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

// const myChild = arr1.concat(arr2, arr3);
// console.log(myChild);

// // CopyWithin
// console.log(fruits);
// // fruits.copyWithin(2 , 0);
// fruits.copyWithin(2 , 0 , 2);
// console.log(fruits);

// Array Flat()
// const  myArr1= [[1,2],[3,4],[5,6]];
// console.log(myArr1.flat(Infinity));

// indexOf()
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
let index = seas.indexOf("North Sea");

// console.log(index); // 2

// 6) Check if a value is an array Array.isArray()
// console.log(Array.isArray(seas));

// flatMap()
let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];

let words = sentences.map((s) => {
  return s.split(" ");
});

// console.log(words.flat());
// or

let newWords = sentences.flatMap((s) => s.split(" "));
// console.log(newWords);

// 2) Adding and removing elements during mapping example
// The flatMap() method allows you to add or remove elements during mapping. Consider the following example:

// Suppose that you have the following shopping cart:

let cart = [
  {
    name: "Smartphone",
    qty: 2,
    price: 500,
    freeOfCharge: false,
  },
  {
    name: "Tablet",
    qty: 1,
    price: 800,
    freeOfCharge: false,
  },
];

let newCart = cart.flatMap((item) => {
  if (item.name === "Smartphone") {
    return [
      item,
      {
        name: "screen Protector",
        qty: item.qty,
        price: 5,
        freeOfCharge: true,
      },
    ];
  } else {
    return [item];
  }
});

// console.log(newCart);

// Splice Method
// console.log(fruits);
fruits.splice(fruits.length - 1, 0, "kiwi");
// console.log(fruits);

//Splice()
fruits.splice(fruits.length - 1, 1);
// console.log(fruits);

// toSpliced()
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const remove = months.toSpliced(0, 1);
console.log(remove);

// Slice()
// console.log(fruits);
// const frt = fruits.slice();
// console.log(frt);

// toString()
console.log(fruits);
console.log(fruits.toString());

console.log(Number.isNaN(NaN));
console.log(isNaN(NaN));

const array = [1, 2, 3, 4, 5, 6];

for (const [key, value] of array.entries()) {
  console.log(key, value);
}

// console.log(Object.entries(array));

// To find()

let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
];

console.log(
  customers.find((C) => {
    return C.credit > 100;
  })
);

// Replace and repalcer

let str = "I like to eat, eat, eat apples and bananas";
let re = /apples|bananas/gi;

let newStr = str.replace(re, (match) => {
  console.log({ match });
  return match.toUpperCase();
});

console.log(newStr);

// // Find function
// The Array find() method returns the first element in an array, which satisfies a provided test function.

// Here’s the syntax of the find() function:

// const match = array.find(callbackFn)
// The find() method accepts a callback function that executes on every element of the array.

// The callbackFn function returns either a truthy or falsy value. If the matching element is found, the callbackFn returns a truthy value or falsy value otherwise.

// The callback has the following syntax:
// callbackFn(element, index, array)

// The callbackFn function takes three arguments:
// element is the current element.
// index the index of the current element.
// array the array that the find() was called upon.

// The find() method executes the callbackFn function for each element in the array until the callbackFn returns a truthy value or there are no more elements to check.

// If the callback returns a truthy value, the find() immediately returns the element and stops searching. Otherwise, it returns undefined.

// thisArg
// The find() method accepts a second optional argument thisArg:
// find(callbackFn, thisArg)

const todos = [
  {
    id: 1,
    text: "React",
    isCompleted: false,
  },
  {
    id: 2,
    text: "NodeJS",
    isCompleted: false,
  },
  {
    id: 3,
    text: "ExpressJS",
    isCompleted: false,
  },
];

let todo = todos.find((todo) => {
  return todo.id === 2;
});
console.log(todo);

const names = ["Joe", "Paul", "George", "Paulia"];
const match = names.find((name) => name.includes("au"));

console.log({ match });
