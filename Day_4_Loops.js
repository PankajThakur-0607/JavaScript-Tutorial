

// Activity 1  For Loop

for(let idx = 1; idx <= 10 ; idx++){
    // console.log(idx);
}


let table = 5;
for (let index = 1; index <= 10; index++) {
    // console.log(`${table} * ${index} = ${table * index}` );
}


// Activity 2  While Loop

let idx = 1;
let sum = 0;
while(idx <= 5){
    sum += idx;
    idx++;
}

// console.log(sum);


let i = 10;
while(i > 0){
    // console.log(i);
    i--;
}



// Activity 3 Do While Loop 
let n = 1
do {
    console.log(n);
    n++;
} while (n <= 5);


// let n1 = 6;
// let fact = 1;
// let indx = 1;
// do {
//     fact = fact * indx;
//     indx++;
// } while (indx <= n1);

// // console.log(fact);

let rowPattern = '';
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        rowPattern += '* '
    }

    rowPattern += "\n";
}

console.log(rowPattern);



for(let i = 1; i <= 10 ; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

for(let i = 1; i <= 10 ; i++){
    if(i == 7){
        break;
    }
    console.log(i);
}







