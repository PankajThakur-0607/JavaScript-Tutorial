
// ES2020 introduced the dynamic import of the module via the function-like import() with the following syntax:
// import(moduleSpecifier);

// The import() allows you to dynamically import a module when needed.

// Here is how the import() works:

// The import() accepts a module specifier (moduleSpecifier) that has the same format as the module specifier used for the import statement. In addition, the moduleSpecifier can be an expression that evaluates to a string.
// The import() returns a Promise that will be fulfilled once the module is loaded completely.
// The following illustrates how to load the greeting.js module dynamically from the app.js module using the import() syntax:



// const btn = document.getElementById('btn');

// btn.addEventListener('click' , () => {
//     import('./Day_13_DynamicModule_01_.js')
//     .then((greeting) => {
//         greeting.sayHello();
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })


// Since the import() returns a Promise, you can use the async/await in the app.js module like this:


const btn = document.getElementById('btn');
btn.addEventListener('click' , async function() {
    try {
        let {sayHello} = await import('./Day_13_DynamicModule_01_.js') 

        sayHello();
        
        // or
        // let greeting = await import('./Day_13_DynamicModule_01_.js') 

        // greeting.sayHello();
    } catch (error) {
        console.log(error);
    }
})