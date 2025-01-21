
// Day_17_Local_Session_Storage_02.js

// Introduction to the Storage type
// The Storage type is designed to store name-value pairs. The Storage type is an Object with the following additional methods:

// setItem(name, value) – set the value for a name
// removeItem(name) – remove the name-value pair identified by name.
// getItem(name) – get the value for a given name.
// key(index) – get the name of the value in the given numeric position.
// clear() – remove all values.

// To get the number of name-value pairs in a Storage object, you can use the length property.

// The Storage object can store only strings. It’ll automatically convert non-string data into a string before storing it.

// When you retrieve data from a Storage object, you’ll always get the string data.

console.log(window.localStorage);
console.log(localStorage.length);

// 1) The setItem() method
// The following uses the setItem() method to store a name-value pair in the localStorage:

// 2) The length property
// To get the number of name-value pairs, you use the length property like this:


// 3) The getItem() method
// To get the value by a key, you use the getItem() method. The following example uses the getItem() method to get the value of theme key:



// 4) The removeItem() method
// To remove a name-value pair by a key, you use the removeItem() method. For example:

// localStorage.setItem('theme','light');
// localStorage.setItem('backgroundColor','white');
// localStorage.setItem('color','#111');
// console.log(localStorage.getItem('theme'));

// localStorage.removeItem('theme');

// console.log(localStorage.length);

// let keys = Object.keys(localStorage);
// for (const key of keys) {
//     console.log(`${keys} : ${localStorage.getItem(key)}`);
// }

const settings = {
    backgroundColor : '#ffff' ,
    color : '#111' ,
    theme : 'ligth'
}

localStorage.setItem('settings' , JSON.stringify(settings));

console.log(localStorage.getItem('settings'));
console.log(localStorage);
console.log(localStorage.length);

let storedSettings = JSON.parse(localStorage.getItem('settings'));

console.log(storedSettings);

let btn = document.querySelector('.btn');

window.addEventListener('storage', function(e){
    console.log(`The value of the ${e.key} changed for the ${e.oldValue}.`);
    console.log(e);
 });


 // Session Storage 

//  sessionStorage.setItem('hello' , 'pankaj');
//  sessionStorage.setItem('hii' , 'pankaj');
//  sessionStorage.setItem('mysw' , 'pankaj');

//  sessionStorage.clear();
