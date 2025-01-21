// .Call Method
function add(x, y) {
    return x + y;
  }
  
  let addition = add.call(this, 10, 20);
  console.log(addition); // 30
  
  var greeting = "Hi";
  
  var messenger = {
    greeting: "Hello",
  };
  
  function say(name) {
    console.log(this.greeting + " " + name);
  }
  
  // say.call(messenger, "John");
  
  
  
  
  // Using the JavaScript call() method to chain constructors for an object
  function Box(height, width) {
    this.height = height;
    this.width = width;
    console.log('called');
  }
  
  function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
  }
  
  let widget = new Widget(100, 200, "red");
  console.log(widget);
  
  
  // Using the JavaScript call() method for function borrowing
  
  
  function isOdd(number){
      return number % 2;
  }
  
  
  function getOddNumbers(){
      return Array.prototype.filter.call(arguments , isOdd);
  }
  
  let ans = getOddNumbers(10,2,3,10,4,6,2,11,15,1,3,4,);
  // console.log(ans);



  const car = {
    name : 'car' ,
    start() {
      console.log('Start the ' + this.name);
    },
    speedUp() {
      console.log('Speed up the ' + this.name);
    },
    stop() {
      console.log('Stop the ' + this.name);
    },
  };

  const aircraft = {
    name: 'aircraft',
    fly() {
      console.log('Fly');
    },
  };

  car.speedUp.call(aircraft); 
  
  
  // Introduction to the JavaScript apply() method
  // The Function.prototype.apply() method allows you to call a function with a given this value and arguments provided as an array. Here is the syntax of the apply() method:
  
  // fn.apply(thisArg, [args]);
  
  // The apply() method accepts two arguments:
  
  // The thisArg is the value of this provided for the call to the function fn.
  // The args argument is an array that specifies the arguments of the function fn. Since the ES5, the args argument can be an array-like object or an array object.
  // The apply() method is similar to the call() method except that it takes the arguments of the function as an array instead of the individual arguments.
  
  // JavaScript apply() method examples
  

//   1) Simple JavaScript apply() method example

  const person = {
    firstName: 'Pankaj',
    lastName: 'Thakur'
}


function greet(greeting , message){
    return `${greeting} ${this.firstName}. ${message}`
}

let result =  greet.apply(person , ['Hello' , 'How are You']);
console.log(result);

let calledFn = greet.call(person , 'hello' , 'how are you')
console.log(calledFn);

// 2) Function borrowing
// The apply() method allows an object to borrow the method of another object without duplicating the code.


const  computer = {
    name : 'Acer' ,
    isOn : false ,
    turnOn : function(){
        this.isOn = true ;
        return `The ${this.name} is On`
    },
    turnOff : function(){
        this.isOn = false ;
        return `The ${this.name} is Off`
    }
}


const server = {
    name : 'Dell Power T30',
    isOn : false,
}

let getResult = computer.turnOn.apply(server);
console.log(getResult);


// 3) Using the apply() method to append an array to another
// The apply() method allows you to append elements of an array to another:

let arr = [1,2,3];
let number = [4,5,6];
arr.push.apply(arr , number);
console.log(arr);



// Introduction to JavaScript bind() method
// The bind() method returns a new function, when invoked, has its this sets to a specific value.

// The following illustrates the syntax of the bind() method:

// fn.bind(thisArg[, arg1[, arg2[, ...]]])
// In this syntax, the bind() method returns a copy of the function fn with the specific this value (thisArg) and arguments (arg1, arg2, …).

let person1 = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

setTimeout(person1.getName, 1000);
// As you can see clearly from the output, the person.getName() returns undefined instead of 'John Doe'.

// This is because setTimeout() received the function person.getName separately from the person object.

// To fix the issue, you can wrap the call to the person.getName method in an anonymous function, like this:

setTimeout(function () {
    person1.getName()
}  ,2000)
// This works because it gets the person from the outer scope and then calls the method getName().


// Or you can use the bind() method:

let f = person1.getName.bind(person1);
setTimeout(f , 1000);



// Using bind() to borrow methods from a different object

// suppose you have a runner object has the run() method : 

let runner = {
  name : 'Runner' ,
  run : function(speed){
      console.log(this.name + ' runs at ' + speed + ' mph.');
  }
};


let flyer = {
  name : 'Flyer' ,
  fly : function(speed) {
      console.log(this.name + ' files at ' + speed + ' mph. ');
  }
};

let run = runner.run.bind(flyer , 20);
run();

let fly = flyer.fly.bind(runner , 30);
fly();


// *****************************************************

  
let car1 = {
    brand: "Honda",
    getBrand: function () {
      return this.brand;
    },
  };
  
  // console.log(car.getBrand()); // Honda
  
  let brand = car1.getBrand;
  // console.log(brand()); // undefined
  
  // You get undefined instead of "Honda" because when you call a method without specifying its object, JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.
  
  // To fix this issue, you use the bind() method of the Function.prototype object. The bind() method creates a new function whose the this keyword is set to a specified value.
  brand = car1.getBrand.bind(car1);
  // console.log(brand()); // Honda
  
  let bike = {
    brand: "Harley Davidson",
  };
  
  brand = car1.getBrand.bind(bike);
  // console.log(brand());
  // In this example, the bind() method sets the this to the bike object, therefore, you see the value of the brand property of the bike object on the console.
  
  