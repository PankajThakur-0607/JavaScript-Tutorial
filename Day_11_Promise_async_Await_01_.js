

// CallBack function in Syncronous and syncronous program


function filter(numbers , CallBack) {
    let result = [] ;
    for(const num  of numbers){
        if(CallBack(num)){
            result.push(num);
        }
    }
    return result;

}

function isOdd(num) {
    if(num % 2 !== 0)
        return num;
}

function isEven(num) {
    return num % 2 === 0;
}

let numbers = [1,23,4,56,89,4,6,7,9,10];
// console.log(filter(numbers , isOdd));
// console.log(filter(numbers , isEven));


// callback function can be a  anonymous function ,which is a function without a name like this:

console.log(filter(numbers , function(num){
    return num % 2 !== 0 ;
}));










function download(url , callback){
    setTimeout(() => {
        // script to download the picture here
        console.log(`downloading ${url} ... `);

        // process the picture once it is completed
        callback(url);

    } , 3000)
 

}

function process(picture){
    console.log(`processing ${picture}`);
}


const  url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const  url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const  url3 = 'https://www.javascripttutorial.net/pic3.jpg';
// download(url1 , process);
// download(url2 , process);
// download(url3 , process);
















const users = [
    {name : 'pankaj' , email : 'pankajothakur456@gmail.com'},
    {name : 'Thakur' , email : 'pankajothakur123@gmail.com'}
];

function getUsers(callback){
    setTimeout( () => {
        callback(users);
    }, 1000);
}



function findUsers(userName , print){
    getUsers(function(users) {
        const  user = users.find((user) => user.name === userName);

        print(user);
    });
}

// findUsers('pankaj' , console.log)




// function getUsers() {
//     let users = [];
//     setTimeout(() => {
//       users = [
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ];
//     }, 1000);
//     return users;
//   }
  
//   function findUser(username) {
//     const users = getUsers(); // A
//     const user = users.find((user) => user.username === username); // B
//     return user;
//   }
  
//   console.log(findUser('john'));
  





function sum(a , b){
    return a + b ;
}

function calculator(a , b , sumCallback){
    return sumCallback(a , b);
}

// console.log(calculator(5 , 10 , sum));



const posts = [
    { post_id: 1, post_title: 'First Post' },
    { post_id: 2, post_title: 'Second Post' },
    { post_id: 3, post_title: 'Third Post' },
  ];
  
  const comments = [
    { post_id: 2, comment: 'Great!'},
    { post_id: 2, comment: 'Nice Post!'},
    { post_id: 3, comment: 'Awesome Post!'},
  ];




function getPost(id , callback){
    const post = posts.find((post)=> {
        return post.post_id === id;
    });

    console.log(post);

    if(post){
        callback(null , post)
    }else{
        callback("no such post found" , undefined);
    } 
};

const  getComment = function(post_id , callback){
    const  result = comments.filter((comment) => {
        return comment.post_id === post_id;
    })

    if(result){
        callback(null , result)
    }else {
        callback('no comments found' , undefined);
    }
}


getPost(4 , (error , post) => {
    // console.log(error);
    if(error){
        return console.log(error);
    }

    console.log(post);

    getComment(post.post_id , (error , comments) => {
        if(error) {
            return console.log(error);
        }
        console.log('Comments : ' ,  comments);
    });
});



