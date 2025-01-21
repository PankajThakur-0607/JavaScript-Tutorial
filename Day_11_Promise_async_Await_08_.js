

// Activity 1  
// Task 1 And Task 2 

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Promise resolved after 2 seconds');
//     }, 2000);
//   });
  
//   promise1.then((message) => {
//     console.log(message);
//   });
  

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise rejected after 4 seconds');
    }, 4000);
  });
  
  promise2.catch((error) => {
    console.error(error);
  });
  


// Activity 2 
// Task 3 

function getData(data){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(data) {
                console.log(" data : " , data );
                resolve('Completed')
            }else{
                reject('Failed')
            }
        },3000)
    })
}


// getData(1)
// .then(() => {return getData(2)})
// .then(() => {return getData(3)})
// .then((result) => {console.log(result)})
// .catch((err) => {console.log(err);})


// const fetchData = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve('Data fetched from server'), 2000);
//     });
//   };


//   fetchData()
//   .then((message) => {
//     console.log("Message");
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('Processing Data'),2000)
//     })
//   })
//   .then((message) => {
//     console.log(message);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('Data processed Successfully') , 2000)
//     })
//   })
//   .then((message) => {
//     console.log(message);
//   })


  // Activity 3 
  // Task 4 

//  (getFetchedData =  async function() {
//    let data =  await fetchData();
//     console.log(data);
// })();

// Task 5 

// (async function getAllData() {
//     try {
//         await getData(1);
//         await getData(2);
//         await getData(3);
//         await getData(4);
//     } catch (error) {
//         console.log(error);
//     }
// })


    // Acticity 4 
    // Task 6 


    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch(error => {console.log(error);})


    
    (async function api() {
      
        try {
            const  url = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            
            const data = await url.json();

            console.log('Data Fetched using async/Await : ' , data);
        } catch (error) {
            console.log(error);
        }
    
  })();


//   Activity 5 
// Task 8 


let p1 = new Promise((resolve , reject) => {
    setTimeout(() => {
        reject('failed')
    } , 1000)
})

let p2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve('I am getting data2')
    } , 2 * 1000)
})

let p3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        reject('I am geeting data 3')
    } , 3 * 1000)
})

Promise.all([p1,p2,p3])
.then((result) => console.log(result))
.catch((err) => {console.log(err);})

Promise.race([p1,p2,p3])
.then((result) => console.log(result))
.catch((err) => {console.log(err);})

// Promise.allSettled([p1,p2,p3])
// .then((result) => console.log(result))
// .catch((err) => {console.log(err);})

// Promise.any([p1,p2,p3])
// .then((result) => console.log(result))
// .catch((err) => {console.log(err);})


