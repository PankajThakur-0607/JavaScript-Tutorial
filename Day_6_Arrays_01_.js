
// Activity 1 
arr = [1,2,3,4,5];
// console.log(arr);
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}

let first = arr[0];
let last = arr[arr.length-1];
// console.log(first);
// console.log(last);


// Activity 2 

arr.push(6);
// console.log(arr);

arr.pop();
// console.log(arr);

arr.shift();
// console.log(arr);

// arr.unshift(1);
console.log(arr);


// Activity 3 

let newArr = arr.map(function (a){
    return a * 2;
});


console.log(newArr);

// Filter 
    let students = [
        {name : "pankaj" , score : 98},
        {name : "Kunal " , score : 10},
        {name : "Hiren" , score : 5},
        {name : "Harsh" , score : -2},
    ]

    let studentGrade = students.filter(function (student){
        return student.score <= 50;
    });

    console.log(studentGrade);

// Reduce 

let nums = [1,2,3,4,5];

let sum = nums.reduce((acc , currVal , currIdx , nums)=>{
    console.log(`Value at index ${currIdx} is : ${currVal} `);
    return acc + currVal;
},0);

console.log(sum);


// Activity 4 

let numbers = [1,2,3,4,5,6];
for(let i = 0; i < numbers.length; i++){
    // console.log(`${numbers[i]}`);
}


// For Each Loop 

// let myArr = [1,2,3,4,5];

// myArr.forEach(function(arr , idx , array) {
//     console.log(`${arr} is at index ${idx} in array ${array}`);
// });



// Activity 5 

let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]];

        // console.log(matrix);
    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        let rowString = '';

        for(let j = 0 ; j < row.length ; j++){
            rowString += row[j] + ' ';
        }

        console.log(rowString);

    }

    // matrix.forEach(function (row){
    //     console.log(row);
    // })
    matrix.forEach(function (row , rowIdx){
        row.forEach(function (elm , colIdx){
            console.log(`Element at [${rowIdx}][${colIdx}] is ${elm}`);
        })
    })


    // console.log(matrix[2][2]);










