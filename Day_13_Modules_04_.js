
// Activity 1 
// Task 1 
import printWife , {add , sayHello , person , pC , printName} from './Day_13_Modules_03_.js';

sayHello();
console.log(add(4 , 5));
// Task 2

console.log(person);
person.addAnotherName('hello')

// Activity 2
// Task 3
pC();
printName();

// Task 4
printWife()

// Task 5 

import * as mathoperation from './Day_13_Modules_03_.js'

console.log(mathoperation.PI);
console.log(mathoperation.add(1 ,2));
// console.log(add(2 , 3));

// Activity 4
// Task 6


import _ from 'lodash';

const numbers = [ 1,2,3,4,5 , 6];
console.log(_.max(numbers));


const chunkArr = _.chunk(numbers , 3);
console.log(chunkArr);



// Task 7 

import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log(error);
})
