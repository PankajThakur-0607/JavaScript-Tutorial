
function isEvenOdd(number){
    if(number % 2 == 0){
        return "the No. is Even";
    }

    return "the No. is Odd";
}
// console.log(isEvenOdd(35));


function calcSquare(number){
    return number * number;
}

// console.log(calcSquare(5));


// Activity 2 
function findMax(a , b ){
    if(a > b){
        return 'a is greater'
    }

    return 'b is greater';
}

// console.log(findMax(10 , 15));


function concatStr(str1 , str2 ){
    // return 'hello ' + str1 + ' ' + str2;
    return `hello my  ${str1} ${str2}`;
}

// console.log(concatStr('pankaj' , 'thakur'));


// Activity 3 

// let calSum = (a , b) => { return a + b;}
let calSum = (a , b) =>  a + b;



// console.log(calSum(4 , 5));



let str = "hii , My Name is Pankaj Thakur";
let checkStr = (str , ch) => {
    for(let i = 0; i < str.length ; i++){
        if(ch == str.charAt(i)){
            return true;
        }
    }

    return false;
}

// console.log(checkStr(str , 'z'));



// Activity 4 :
let multiply = function(a ,b =  5){
    return a * b;
}

// console.log(multiply(10 ,  ));

// let abc = () => {
//     console.log("My World");
// }

// abc();


// let myName = 'pankaj' ;
// let age = 


function greetingMsg(userName , age){
    console.log(`Hello ${userName} Your Age is  : ${age}`);
}

greetingMsg('Pankaj Thakur' , 25 );

  


// Activity 5 
let callFnc = () => {
    console.log('I am Your Call Function ');
}

let ans = '';
function higherOrderFnc(logic , number){
    for(let i = 0; i < number ; i++){
        logic();
    }
}

// console.log(higherOrderFnc(callFnc , 3));



function first(value){
    return value + 1 ;
}

function second(value){
    console.log(value);
}

let op = 0;
function secondHigherFn(fn1 , fn2 , value){
   op =  first(value);

   second(op);
}

secondHigherFn(first , second , 30);





