

// local variable

function add(){
// a and b are local variable which cannot be accesed outside
    let a = 5;
    let b = 4; 
    return a + b ;
}

console.log(add());    

// Global variable 
 // a is global variable which can be accesed everyWhere
let a = 4 ;
function myFunction(){
    return a * a ;
}

// console.log(myFunction());


// Note  
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.


//  * ********************** *********************************

let counter  = 0 ; 
function add1(){
    let counter = 0;
    counter += 1 ;
    return counter;
}

add1();
console.log(add1());
console.log(add1()); //It did not work because we reset the local counter every time we call the function.


function add2() {
    let counter = 0 ;

    function plus(){counter += 1; }
    plus();
    return counter;
}

console.log(add2());
// This could have solved the counter dilemma, if we could reach the plus() function from the outside.

// We also need to find a way to execute counter = 0 only once.


// JavaScript closures in a loop

// for(var i = 1 ; i <= 3  ; i ++){
//     setTimeout(() => {
//         console.log('after ' + i + ' second(s):  '+  i);
//     }, i * 1000);
// }
// The reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure. It remembers the value of i from the last iteration of the loop, which is 4.

// In addition, all three closures created by the for-loop share the same global scope access the same value of i.


// 1) Using the IIFE solution

for(var i = 1 ; i <= 3 ; i++){
    (function(i){
        setTimeout(() => {
            console.log('after ' + i + ' second(s):  '+  i);
        }, i * 1000);
    })(i);
}

// Using let keyword

for(var i = 1 ; i <= 3  ; i ++){
        setTimeout(() => {
            console.log('after ' + i + ' second(s):  '+  i);
        }, i * 1000);
    }





