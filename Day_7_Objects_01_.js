// This example creates an empty JavaScript object, and then adds 4 properties:
// const   person = {};
// person.firstName = 'Pankaj';
// person.lastName = 'Thakur';

// console.log(person);

// This example create a new JavaScript object using new Object(), and then adds 4 properties:

// const person5 = new Object();
// person5.firstName = "Pankaj";
// person5.lastName = "Thakur";
// console.log(person5);

// Create an Object
const person = {
  firstName: "Pankaj ",
  lastName: "Thakur",
  age: 50,
  eyeColor: "blue",

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "Monika ",
  lastName: "Thakur",
};

// console.log(person.age);
// console.log(person['age']);
// console.log(person.fullName());

// console.log(person);

const anotherPerson = person;

// console.log(anotherPerson.age = 55);
// console.log(person);

// let age = person.age;   // age = person['age'];
//   or
let x = "firstName";
let y = "age";

// console.log(person[x]);
// console.log(person[y]);

person.natiionality = "English";

// console.log(person);
delete person;
//  console.log(person);

// Nested loop
myObj = {
  name: "john",
  age: 30,
  myCars: {
    car1: "nexon",
    car2: "fortuner",
    car3: "harrier",
  },
};

//  console.log(myObj.myCars.car1);
// console.log(myObj['myCars']['car2']);

const keys = Object.keys(person);
const val = Object.values(person);
// console.log(keys);
// console.log(val);

// const  fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.freeze(fruits);
// fruits.push('Guava');
// console.log(fruits);
// console.log(Object.isFrozen(fruits));

// Object.assign()

// console.log(person);
// Object.assign(person , person2);
// console.log(person);
// console.log(person2);

// Object.create()

// const  man = Object.create(person);
// man.firstName = "I will Do it";
// console.log(man);

// Object.defineProperty() && Object.defineProperties();
// console.log(person);

Object.defineProperties(person, {
  language: {
    value: "English",
    writable: true, // Can be modified
    enumerable: true, // Will show up in enumeration
    configurable: true, // Can be deleted or modified
  },
  year: {
    value: 2003,
    writable: true, // Can be modified
    enumerable: true, // Will show up in enumeration
    configurable: true, // Cannot be deleted or modified
  },
});

// console.log(person);
Object.defineProperty(person, "carrer", {
  value: "CSE",
  writable: false,
  // enumerable: true,
  configurable: true,
});
console.log(person.language);
console.log(person.carrer);
console.log(person);

// Object.entries()
const entry = Object.entries(person);
// console.log(entry);
// // console.log(entry[3]);
const myMap = new Map(Object.entries(person));
// console.log(myMap);

//  Object.fromEntries()
const sportsPrice = [
  ["cricket", "1Lakh"],
  ["football", "5Lakh"],
  ["badminton", "50K"],
];
// console.log('Sports Price : ' , sportsPrice);
const fromEntry = Object.fromEntries(sportsPrice);
// console.log(fromEntry);

// Object.getOwnPropertyDescriptor()

// console.log(Object.getOwnPropertyDescriptor(person , 'year'));

// // console.log(person);
// delete person.year ;
// console.log(person);
// person.year = 10;
// console.log(person);

// Object.defineProperty(person , 'year', {

//     writable : false,
//     enumerable : false

// });

// console.log(' hello ' , Object.getOwnPropertyDescriptors(person));

// // console.log(person);

// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnProperty(person));

const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

// Call Back Function to Group Elements
function myCallBack(obj) {
  return obj.quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallBack);
// console.log(result);

const items = {
  item1: { type: "fruit", color: "red", weight: 1 },
  item2: { type: "fruit", color: "yellow", weight: 1.2 },
  item3: { type: "vegetable", color: "green", weight: 0.5 },
  item4: { type: "fruit", color: "red", weight: 1.1 },
  item5: { type: "vegetable", color: "green", weight: 0.7 },
};

function callFn(obj) {
  return obj.type + "-" + obj.color;
}
// console.log(items);
const itemsArray = Object.entries(items).map(([key, value]) => ({
  key,
  ...value,
}));
// console.log(itemsArray);
const newItems = Object.groupBy(itemsArray, callFn);
// console.log(newItems);

const library = {
  name: "City Central Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  ],
  address: {
    lane1: "hello",
    lane2: [
      {
        pincode: 396170,
        district: "Valsad",
      },
      {
        pincode: 300916,
        district: "Vadodara",
      },
    ],
  },
  showBooksInfo: function () {
    return this.books.map((book) => {
      return `The title is of book : ${book.title}  published in ${book.year}`;
    });
  },
};

let showAddress = library.address.lane2.map(function (add) {
  return ` $ pinCode is : ${add.pincode} District is :   ${add.district} `;
});

console.log(showAddress);
