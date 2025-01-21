// JavaScript prototypal inheritance and __proto__

let person = {
  name: "John Doe",
  greet: function () {
    return "Hi, I'm " + this.name;
  },
};

// console.log(person.__proto__);
// console.log(person.__proto__ === Object.prototype); // true

let teacher = {
  teach: function (subject) {
    return "I can teach " + subject;
  },
};

// f you want the teacher object to access all methods and properties of the person object, you can set the prototype of teacher object to the person object like this:
teacher.__proto__ = person;

// Now, the teacher object can access the name property and greet() method from the person object via the prototype chain:
// console.log(teacher.name);
// console.log(teacher.greet());

//A standard way to implement prototypal inheritance in ES5

// ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method.

// Note that now you should use the newer ES6 class and extends keywords to implement inheritance. It’s much simpler.

// The Object.create() method creates a new object and uses an existing object as a prototype of the new object:
// Syntax ::
// Object.create(proto, [propertiesObject])

let student = Object.create(person, {
  name: { value: "John Doe" },
  study: {
    value: function (subject) {
      return "I can study " + subject;
    },
  },
});

// ES5 also introduced the Object.getPrototypeOf() method that returns the prototype of an object. For example:
// console.log(Object.getPrototypeOf(student) === person);

// console.log(student.greet());



