
function showMessage (){
     console.log("Hello world");
}

// showMessage();
// showMessage();

// Local Variable 
function print(){
    let message = "Hello , I am Pankaj Thakur";
    console.log(message);
}

// print();
// console.log(message); // <-- Error! The variable is local to the function

// Global  Variable 
let msg = "Hello , I am Monika Thakur";
function printMsg(){
    console.log(msg);
}

// printMsg();
// console.log(msg);

// The function has full access to the outer variable. It can modify it as well.

let userName = 'The Rock';
function showName(){
    userName = 'John Wick'

    let message = 'Hello ' +  userName
    console.log(message);
}

// console.log(userName);
// showName();
// console.log(userName);  

// *********************************************************

// The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

let myName = 'The Rock';
function showName(){
    let myName = 'John Wick'

    let message = 'Hello ' +  myName
    console.log(message);
}

// console.log(myName);
// showName();
// console.log(myName);



function add(a , b ){
    return a + b ;

}

let sum = add;

function average(a , b , add){
    return add(a , b ) / 2;
}

let result = average(10  , 20 , sum);

// console.log(result);



// Returning function from function 

function compareBy(propertyName){
    return function(a,b){
        let x = a[propertyName] , y = b[propertyName];
        if(x > y){
            return 1;
        }else if(x < y){
            return -1;
        }else{
            return 0;
        }
    };
}

let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

// console.log('Products Sorted By Name : ');
products.sort(compareBy('name'));
// console.log(products);

products.sort(compareBy('price'));
// console.log(products);


function cmToIn(length) {
    return length / 2.54;
}

function inToCm(length) {
    return length * 2.54;
}

function convert(fn , length){
    return fn(length);
}

let inches = convert(cmToIn , 10);
// console.log(inches);

let cm = convert(inToCm , 10);
    // console.log(cm);







    let show = function(){
        console.log('Anonymous Function');
    };
    
    // show();
    
    
    // setTimeout(function(){
    //     console.log('Execute later after 12second');
    // }, 2000)
       
    
    
    // // IIFE Immediatelty invoked function exection 
    
    // (function (){
    //     console.log('Immediately invoked function');
    // })();

    // (function(){
    //     console.log("Next IIFE function ");
    // })()
    

    let add1 = (function (a,b){
        return a + b ;
    })(10,20);

    // console.log(add1);


// Higher Order function 

// Callback function, passed as a parameter in the higher order function

function callBackFunction(){
    console.log('I am A CallBack function ');
}

function higerOrderFunction(fn){
    console.log('I am HigerOrder Function');
    fn();
}

// higerOrderFunction(callBackFunction);



// // Function to calculate the area of circle 
// const radius = [1,2,3];
// const  calcArea = function(radius){
//     const  output = [];
//     for(let i = 0 ; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;

// }

// // function to calculate diameter of the circle
// const calculateDiameter =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }

// console.log(calcArea(radius));
// console.log(calculateDiameter(radius));


const  radius = [1,2,3];

const  area = function(radius){
    return Math.PI * radius * radius;
}


const  diameter = (radius) => {
    return 2 * radius;
}

function circumference(radius){
    return 2 * Math.PI * radius;
}


const  calculate = function (radius , logic){
    const  output = [] ;
    for(let i = 0; i < radius.length ; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

// console.log(calculate(radius , area));
// console.log(calculate(radius , diameter));
// console.log(calculate(radius , circumference));


// Map Fucntion 

const  arrs = [1,2,3,4,5];

const  newArr = arrs.map( ar => ar * 2);
console.log(newArr);


// let setColor = function (color) {
//     return {value: color}
// };

let  setColor = (color) => ({value : color});

let backgroundColor = setColor('Red');
console.log(backgroundColor.value); // "Red"