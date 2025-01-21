// let users ; 

// export default (async () => {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const response = await fetch(url);
//     users = await response.json();
// })();

// export {users};



// Using the top-level await
// First, change the user.mjs to the following:

const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
let users = await response.json();

export { users };

