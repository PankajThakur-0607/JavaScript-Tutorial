// Destructuring

// Array destructuring allows you to assign elements of an array to variables in a single line.
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);

// 2. Skipping Values in Arrays
// You can skip elements in an array by using a comma without a variable.
const [first, , second] = numbers;

// console.log(first);
// console.log(second);

// 3. Destructuring with Default Values
// If the value is undefined, you can provide a default value to use instead.

const [x = 5, y = 7] = [1];
// console.log(x);
// console.log(y);
// Here, x takes the value 1 from the array, and y uses the default value 7 because there is no second element in the array.

// 4. Basic Object Destructuring
// Object destructuring allows you to unpack properties from an object into variables.
const person = {
  name: "pankaj",
  age: 22,
};

const { name1, age } = person;
// console.log(name1);
// console.log(age);

const book = {
  title: "The Alchemist",
  author: "paul ceole",
  year: 2003,
};

const { title, author, year } = book;
// console.log(title);
// console.log(author);

// 5. Destructuring with Renaming Variables
// You can rename variables while destructuring objects.
const user = {
  firstName: "Pankaj",
  lastName: "Thakur",
};

const { firstName: fName, lastName: lName } = user;
// console.log(fName);
// console.log(lName);

// 6. Nested Destructuring
// Destructuring can be used to unpack nested objects and arrays.
const myUser = {
  id: 102,
  name: "Pankaj",
  address: {
    city: "Umargam ",
    zip: 396170,
  },
};

const {
  name,
  address: { city : ubr, zip: pinCode },
} = myUser;
// console.log(pinCode);
// console.log(ubr);

console.log(myUser['address']['zip']);



const courseInfo = {
  course: "JavaScript",
  instructor: {
    name: "Alice",
    experience: 5,
  },
};

const {
  instructor: { name: nm, experience: exp },
} = courseInfo;

//   console.log(nm);

const company = {
  name: "TechCorp",
  location: {
    address: {
      street: "123 Tech Lane",
      city: "Innovation City",
      postalCode: {
        code: "12345",
        country: "Techland",
      },
    },
  },
  employees: [
    {
      name: "Alice",
      position: "Developer",
    },
    {
      name: "Bob",
      position: "Designer",
    },
  ],
};



const {
  name: name3,
  location: {
    address: {
      postalCode: { code, country },
    },
  },
  employees: [{ name: name4, position }, { name: name5, position: pos }],
} = company;

// console.log(code);
// console.log(name3);
// console.log(name4);
// console.log(position);
// console.log(name5);
// console.log(pos);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
const [
  { name: firstName, age: firstAge },
  { age: secondAge, name: secondName },
] = people;

// console.log(firstName);
// console.log(secondName);
// console.log(firstAge);
// console.log(secondAge);
// firstName = 'Alice', secondAge = 30
