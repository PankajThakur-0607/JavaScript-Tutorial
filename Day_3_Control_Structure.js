

// Activity 1 

let pankaj = 8; 
if(pankaj > 0){
    console.log("The number is Positive ");
}else if(pankaj < 0){
    console.log("The number is negative ");
}else{
    console.log("The number is 0");
}


let myAge = 2;

if(myAge >= 18){
    console.log("he/she is eligible for Vote ");
}else{
    console.log("he/she is not eligible for Vote");
}


let a = 15; 
let b = 80; 
let c = 89 ;

if(a > b){
    if(a > c){
        console.log("a is greatest");
    }
}else if(b > c){
    if(b > a){
        console.log("b is greatest");
    }
}else{
    console.log("c is greatest");
}

let day = 6;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2 :
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4 :
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6 :
        dayName = 'friday';
        break;
    case 7 :
        dayName = 'Saturday';
        break;
    default:
        console.log("Please enter Day from 1 - 7 ");
        break;
}

// console.log(dayName);


let percenTage = 45;
let grade ;


switch(true){
    case percenTage >= 90 && percenTage <= 100 :
        grade = 'A'  
        break;
    case percenTage >= 80 && percenTage < 90:
        grade = 'B'  
        break;    
    case percenTage >= 70 && percenTage < 80 :
        grade = 'C'  
        break;
    case percenTage >= 60 && percenTage < 70:
        grade = 'D'  
        break;    
    case percenTage >= 35 && percenTage <= 50 :
        grade = 'P'  
        break;
    default :
    console.log("You failed the Exam");
    break;     
}

// console.log(grade);



// Ternery Operator 

let num = 5;
let isEvenOrOdd = num % 2 === 0 ? "Even" : "Odd";

console.log(isEvenOrOdd);

// Multiple Tenery Operator
let speed = 130;
let message = speed >= 120 ? "OverSpeed" : speed >= 90 ? "Fast" : "OK";

console.log(message);



// 2) Using the JavaScript switch statement to get the day count based on a month


let year = 2024 ;
let month = 2;
let dayCount ;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7 : 
    case 8 : 
    case 10 :
    case 12 :
        dayCount = 31;
        break;
    
    case 4 : 
    case 6 : 
    case 9 : 
    case 11 : 
        dayCount = 30;
        break;
    case 2 :
    // Leap Year 
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        dayCount = 29 ;
    }else{
        dayCount = 28 ;
    }
    break;

    default:
        dayCount = -1;
        break;
}

console.log(dayCount);
