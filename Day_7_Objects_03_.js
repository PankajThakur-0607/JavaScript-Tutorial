

// Reduce Function 

const fruitsPrice = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
  ];
  

  
//  const  totalPrice =  fruitsPrice.reduce( (acc , item) => {
//     return acc + item.price;
//  } , 0)
// console.log(totalPrice);



const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];

  const  groupItem = items.reduce(function(acc , val){
        let category = val.category;
        if(!acc[category]){
            acc[category] = [];
        }

        acc[category].push(val.name);
        return acc;
  } , {})

  console.log(groupItem);


  // flatening of Array
  const arrays = [[1, 2, 3], [4, 5], [6]];
  const flattenArr = arrays.reduce(function(acc , currVal){
    return acc.concat(currVal);
  } , [])
  console.log(arrays);
  console.log(flattenArr);


  const  numbers = [1,2,3,1,2,3,7,8,7];

  const noDuplicates = numbers.reduce((acc , currVal) => {
    if(!acc.includes(currVal)){
      acc.push(currVal);
    }

    return acc;
  },[])

  console.log(noDuplicates);


  const names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice'];

  const  count = names.reduce((acc , currVal) => {
    if(!acc[currVal]){
      acc[currVal] = 1;
     }else{
      acc[currVal]++ ;
     }
     return acc;
  }, {})

  console.log(count);

  const nums = [3,10,2,4,7,9,1,5];
  const max = nums.reduce((acc , currVal) => {
    return acc > currVal ? acc : currVal;
  })
  console.log(max);



  // Map function 
  let fruits = ['apple', 'banana', 'cherry'];
  let fruitObject =  fruits.map((fruit) => {
    return {name : fruit}
  });
  console.log(fruitObject);



let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

let userNames = users.map((user) => {
  return user.name;
})

// console.log(userNames);



// Filter String by Length

let words = ['apple' , 'banana' , 'grape ', 'pear' , 'kivi'];

let longWords = words.filter((word) => {
  return word.length > 4;
})

// console.log(longWords);

let keyValuePairs = users.map((user) => {
  return  user.name;
})

console.log(keyValuePairs);


const newuser = {
  name: 'Alice', 
  age: 25,
  city: 'New York'
}

let filteredEntires = Object.entries(newuser).map(function([key , value]){
  return `${key}: ${value}`;
})

console.log(filteredEntires);


