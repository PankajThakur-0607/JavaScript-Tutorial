// Error Handling

// function getUserById(id) {

//     if(typeof id !== 'number' || id <= 0 ){
//         throw new Error ('Invalid id argument');
//     }

//     return new Promise((resolve, reject) => {
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }



// getUserById('a')   // Uncaught Error: Invalid id argument
// .then(user => console.log(user.username))
// .catch(err => console.log(err));

// When you raise an exception outside the promise, you must catch it with try/catch:

// try {
//     getUserById('a')
//     .then(user => console.log(user.username))
//     .catch(err => console.log(err));
// } catch (error) {
//     console.log(`caught by try/catch ${error}`);
// }


//*********************************************************** **************************************************************/
// Error inside the promises

// let authorized = false;
// function getId(id){
//     return new Promise((resolve , reject) => {
//         if(!authorized){
//             throw new Error('Unauthorized access to the user data');
//         }
        
//         resolve( {
//             id : id ,
//             username : 'pankaj'
//         });
//     });
// }

// // If you throw an error inside the promise, the catch() method will catch it, not the try/catch.

// try {
//     getId(10)
//     .then(user => console.log(user.username))
//     .catch(err => console.log(`Caught by .catch ${err}`));
// } catch (error) {
//     console.log(`caught by try/catch ${error}`);
// }


/************************************************************************************************* */

// Calling reject() function
// Throwing an error has the same effect as calling the reject() as illustrated in the following example:


// let authorized = false;

// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         if (!authorized) {
//             reject('Unauthorized access to the user data');
//         }

//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// try {
//     getUserById(10)
//         .then(user => console.log(user.username))
//         .catch(err => console.log(`Caught by .catch ${err}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }

// In the above example, instead of throwing an error inside the promise, we called the reject() explicitly. The catch() method also handles the error in this case.

/*************************************************************************************************************** */

// Missing the catch() method
// The following example does not provide the catch() method to handle the error inside the promise. It will cause a runtime error and terminate the program:

// let authorized = false;
// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         if (!authorized) {
//             reject('Unauthorized access to the user data');
//         }
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// try {
//     getUserById(10)
//         .then(user => console.log(user.username));
//     // the following code will not execute
//     console.log('next');

// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }

/*************************************************************************************************************** */

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'john'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN','GMAIL']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}


// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then(console.log);

(async function showServices() {
    
    try {
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
    
        console.log(`the service cost is ${cost}`);
    } catch (error) {
        console.log(error);
    }

})();
