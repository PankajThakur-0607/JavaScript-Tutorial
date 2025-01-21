

  export   function sayHello(){
    console.log("Hello Monika");
  }

  export function add(a , b ){
    return a + b ;
  }


  // Task 2 
  const person = {
    name : 'Pankaj Thakur',
    age : 21 ,
    addAnotherName(anotherName){
        console.log(`${this.name}  -  ${anotherName}`);
    }
  }

//   person.addAnotherName('Monika');
export {person}


// Task 3 

const printName = () => {
    console.log('hello World');
}

const printCollege = function() {
    console.log('Parul University');
}

 const printWife = function(){
    console.log('Hello Laddoo');
 }

 export default printWife;
export { printCollege as pC , printName}



export const PI = 3.14159;

export function subtract (a ,b){
    return a - b;
}