// OOPS and Prototype

// Object Literals 
// const user = {
//     username : 'pankaj' ,
//     age : 21 ,

//     getDetail(){
//         console.log(this);
//     }
    
// }

// console.log(user.username);
// user.getDetail()


// To initialise value in single chance we use Constructor

// const promise1 = new Promise();
// new KeyWord is used to give new instance every time 

function Employ(username , loginCount , isLoggedIn){

    if(!new.target){
        throw Error('Cannot be called without the new keyword')
    }

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const emplyOne = new  Employ('pankaj ' , 15 , true);
// const emplyTwo =  Employ('Thakur ' , 15 , true);

console.log(emplyOne);
// console.log(emplyTwo);

// emplyOne.greeting()

// console.log(emplyOne.constructor);
// console.log(global);


// Prototype 

// function Person(name) {
//     this.name = name;
// }

// console.log(Person);
// console.log(Person.prototype);

function multiplyBy5(num){
    return 5 * num;
}

multiplyBy5.power = 2 ;
// console.log(multiplyBy5(4));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


 function Person(name , age){
    this.name = name;
    this.age  = age;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.greet = function(){
    return `Hi , I am ${this.name} !`;
}


const p1 = new Person('Pankaj' , 21);

p1.increaseAge = function(){
    return ++this.age;
}

// console.log( p1.getName());
// console.log( p1.greet());

let s = p1.toString();
// console.log(s);

// console.log(p1.increaseAge());


// If you call a method that doesn’t exist on the Person.prototype and Object.prototype object, the JavaScript engine will follow the prototype chain and throw an error if it cannot find the method. For example:

// p1.fly();  // TypeError: p1.fly is not a function


// Seperate Method

const p2 = new Person('Monika' , 20);
p2.add = function(){
    return `${this.name} Thakur`
}

// console.log(p2.add());



// console.log(p1.add()); // It will not work as it is seperate Method of instance  than Prototype   for more prefer --->  to Notes_03


// Shadowing
// console.log(p1.greet());

p1.greet = function(){
    console.log('hello');
}
// p1.greet()  // Because the p1 object has the greet() method, JavaScript just executes it immediately without looking it up in the prototype chain.
// This is an example of shadowing. The greet() method of the p1 object shadows the greet() method of the prototype object which the p1 object references.



let myName = 'pankaj      ';

// console.log(myName.length);

let myHeros = ['Thor' , 'SpiderMan' , 'Hulk'];

let heroPower = {
    Thor : 'Hammer' ,
    SpiderMan : 'sling' ,
    Hulk : 'OverPower' ,

    getSpiderPower(){
        console.log(`SpiderPoer is ${this.SpiderMan}`);
    }
}

Object.prototype.hii = function(){
    console.log('pankaj is present in all');
}

// heroPower.hii();
// myHeros.hii();

function hello(){
    console.log('hi');
}

// hello.hii();


// let p3 = Object.create(heroPower);
// console.log(typeof p3);

Function.prototype.getNo = function(num){
    console.log(num);
}
// hello.getNo(5);

// hello.getName = function(name){
//     console.log(name);
// }

// hello.getName('pankaj')



// ****************************************************


// Inheritance



const  User = {
    name : 'Pankaj ' , 
    age : '25'
}


const Teacher = {
    makeVideo : true,
}

const TeachingSupport = {
    isAvailabale : false,
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true ,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User;
// console.log(Teacher.name);

// console.log(TASupport.isAvailabale);


// Modern Syntax 

// Object.setPrototypeOf(TeachingSupport , Teacher);





// making our own Prototype method
let anotherUsername = 'MonikaSingh   ';
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}


// anotherUsername.trueLength();
// console.log(anotherUsername.length);


// **********************************************************

const people = {
    name : 'pankaj',
    age : 21
}


const welcome = function (){
    return `hello ${this.name} Your Age is ${this.age} years old`
}

let getans = welcome.bind(people);

// console.log(getans());

