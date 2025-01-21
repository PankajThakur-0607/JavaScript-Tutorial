
// Common JS modules 

// function hello(message){
//     console.log('Hello  ' + message);
// }


// function showAge(hello , age){
//     return hello + 'your age is : ' +  age;
// }

// module.exports = {hello , showAge};


// ************************************


// ES6 modules 
 function hello(message){
    console.log('Hello  ' + message);
}


 function showAge(hello , age){
    return hello + 'your age is : ' +  age;
}


  function pankaj(){
    console.log("Hello " + " pankaj " );
}

export {pankaj as p , hello , showAge};