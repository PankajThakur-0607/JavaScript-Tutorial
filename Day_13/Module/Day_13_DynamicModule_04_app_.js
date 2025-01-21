// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => {
//     let result = json.map( todo => ({
//         userId : todo.userId ,
//         id : todo.id    
//     }));
//     console.log(result);
//   })
//   .catch(error => console.log(error));
//  *********************************************************

// First, the app.mjs imports the user.mjs module.
// Second, the user.mjs module executes and makes an API call.
// Third, while the second step is still ongoing, the app.mjs starts using the users data imported from the user.mjs module.




// To fix the issue, you can export a Promise from the user.mjs module and wait for the API call to complete before using its result.

// In this new version, the user.mjs model exports the users and a Promise as a default export.


// import promise ,  { users  } from "./Day_13_DynamicModule_03_user_.js";

// function render (users) {
//     if(!users){
//         throw 'the List is not Available';
//     }
//     const list = users
//     .map((user) => {
//         return `<li>${user.name}(<a href = "mailto : ${user.email}">${user.email}</a>)</li>`
//     }).join('');

//     return `<ol>${list}</ol>`
// }

// promise.then(() => {
//     let  container = document.querySelector('.container');
//     try{
//         container.innerHTML = render(users);
//     }catch(err) {
//         container.innerHTML = err;
//     }

// });


import { users } from './Day_13_DynamicModule_03_user_.js';

function render(users) {
  if (!users) {
    throw 'The user list is not available.';
  }
  let list = users
    .map((user) => {
      return `<li> ${user.name}(<a href="mailto:${user.email}">${user.email}</a>)</li>`;
    })
    .join(' ');

  return `<ol>${list}</ol>`;
}

let container = document.querySelector('.container');

try {
  container.innerHTML = render(users);
} catch (error) {
  container.innerHTML = error;
}
