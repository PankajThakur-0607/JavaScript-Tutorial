// Try Catch 


// const add = (x ,y) => x + y;

// try {
//     let result = add(10 , 20);
//     console.log(result);

// } catch (error) {
//     console.log({name : error.name , message : error.message});
// }

// console.log('bye');

// The exception identifier
// When an exception occurs in the try block, the exception variable (e) in the catch block stores the exception object.

// If you don’t want to use the exception variable, you can omit it like this:

const  isValidation = (str) => {
    try {
        JSON.parse(str);
        return true;
    } catch {
        return false;
    }
};

let valid =  isValidation(`{"language" : "JS"}`);
console.log(valid);


// JavaScript try…catch…finally statement example

// let ans = 0;
// try{
//     ans = add(10 , 20);
// }catch(error) {
//     console.log(error.message);
// }finally{
//     console.log(ans);
// }


// try…catch…finally and return
// The finally block always executes whether exceptions occur or not. Also, you can do nothing to prevent it from executing including using a return statement. For example:


function fn(){
    try {
        return 1 ;
    } catch (error) {
        return 2 ;
    }finally{
        return 3 ;
    }
}
console.log(fn());

// In other words, the return statements in the try and catch blocks are ignored in the try...catch...finally statement.


// JS Throw Statement 

// 1) Using the JavaScript throw statement to throw an exception
// 2) Using JavaScript throw statement to throw an instance of the Error class
function add(x, y) {
    if (typeof x !== 'number') {
      throw new Error('The first argument must be a number');
    }
    if (typeof y !== 'number') {
        throw new Error('The second argument must be a number');
      
    }
  
    return x + y;
  }
  
//   try {
//       const result = add('a', 10);
//       console.log(result);
//   } catch (error) {
//     console.log({name : error.name , message : error.message});
//   }


// 3) Using JavaScript throw statement to throw a user-defined exception

  class NumberError extends Error {
    constructor (value){
        super(`"${value}" is not a valid number`);
        this.name = 'InvalidNumber';
    }
  }

function subtract(a , b){
    if(typeof a !== 'number'){
        throw new NumberError(a);
    }
    if(typeof b !== 'number' ){
        throw new NumberError(b);
    }

    return a - b;
}

try {
    const result = subtract(10 , 'a');
    console.log(result);
} catch (error) {
    console.log({name : error.name , message : error.message});
}

  


//  hello = 1456;
// console.log(this);




