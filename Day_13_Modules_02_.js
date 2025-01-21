
// const {hello , showAge} = require('./Day_13_Modules_01_');

// hello('pankaj thakur')
// console.log(showAge('pankaj ' , 22));


// import {p , showAge , hello} from './Day_13_Modules_01_.js'
import * as name from './Day_13_Modules_01_.js'

name.hello('Pankaj')

console.log(name.showAge('pankaj '  , 25));

name.p();
