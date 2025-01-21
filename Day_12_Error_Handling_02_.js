

// Activity 1
// Task 1 

//     function add(a , b){

//         try {
//             let result = a + b + c;
//             console.log(result);
//         } catch (error) {
//             console.log({name : error.name , message : error.message});
//         }
//     }

// add(2 , 5 );


function throwError() {
    try {
        throw new Error('This is an intentional error.');
    } catch (error) {
        console.error('Caught an error:', error.message);
    }
}

throwError();


// task 2 

    // function divide(a ,b){

    //     try {
    //         if(b === 0){
    //             throw 'Denominator cannot be zero';
    //         }
    //         let result = a / b ;
    //         console.log(result);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // divide(5 , 0);

    function divide(a, b) {
        try {
            if (b === 0) {
                throw new Error('Cannot divide by zero.');
            }
            return a / b;
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    
    divide(10, 0);  // Example with division by zero
    
    

    // Activity 2 
    // Task 3 

    // function finnalyBlock(){
    //     try {
    //         console.log("I am a try block , i execute when the the code is correct ");
    //     } catch (error) {
    //         console.log(error);
    //     }finally{
    //         console.log(' i exectue irrespective of the case');
    //     }
    // }

    // finnalyBlock();


    function tryCatchFinally() {
        try {
            console.log('In try block');
            throw new Error('An error occurred');
        } catch (error) {
            console.error('Caught an error:', error.message);
        } finally {
            console.log('Finally block executed');
        }
    }
    
    tryCatchFinally();
    


    // Activity 3 

    class CustomError extends Error {
        constructor(message){
            super(message);
            this.name = 'CustomError';
        }
    }


    function multiply(a , b){
        try {
            if(a === 0){
             throw new CustomError('cannot be zero')
            }
            if(b === 0){
             throw new  CustomError('cannot be zero')
            }

            let result = a * b ;
            console.log(result);
        } catch (error) {
        console.log({name : error.name , message : error.message});
        }
    }

    multiply(0,0);


    // Task 5 

    class checkString extends Error {
        constructor(value){
            super('string cannot be empty');
            this.name = 'EmptyStringError'
        }
    }

    function checkStr(value){

        try {
            if(value.trim().length === 0 ){
                throw new checkString();
                
            }

            console.log(value);
        } catch (error) {
            console.log({name : error.name , message : error.message});
        }
    }

    checkStr('')

    // *********************************************************
    function validateInput(input) {
        try {
            if (!input) {
                throw new CustomError('Input cannot be empty');
            }
            console.log('Input is valid:', input);
        } catch (error) {
            console.error('Validation error:', error.message);
        }
    }
    
    validateInput('');  // Invalid input example
    

    

    //  ****************************************+************


    // Task 6  
    let success = false;
    function errorHandle(){
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                if(success){
                    resolve('There is no Error')
                }else{
                    reject('Work Even Harder')
                }
            }, 3000);
        })
    }

    // errorHandle()
    // .then((response) => console.log(response))
    // .catch((error) => {console.log('error : ' , error);})


    // Task 7 
    let asyncFn = async function() {
        try {
        await errorHandle();
        } catch (error) {
            console.log(error);
        }
    }

    // asyncFn();



    // Activity 5 

    // task 8 

    // fetch('https://invalid-url.com')
    // .then((response) => {
    //     if(!response.ok){
    //         throw new Error('Network response was not OK')
    //     }
    //     return response.json();
    // })
    // .catch((err) =>{
    //     console.log({name : err.name , message : err.message});
    // })


    // Task 9 ;
    
    async function fetchData() {
        try {
            const response = await fetch('https://invalid-url.com');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Async fetch error:', error.message);
        }
    }
    
    fetchData();
    