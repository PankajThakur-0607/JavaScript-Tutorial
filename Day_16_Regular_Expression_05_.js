

// Acitvity 1 

// Task 1


let s  =  'javascript is cool , javascript is awesome';
let pattern = /javascript/g;
console.log(pattern.exec(s));
let match;

while ((match = pattern.exec(s)) != null){
    console.log(match);
}

console.log(s.match(pattern));


// Task 2
s = 'My phone nu. is 777887426';
pattern = /\d+/g;
console.log(s.match(pattern));

// Activity 2 
// Task 3 

s = 'hello , My name is , Pankaj Thakur ,Yours';
pattern  =  /\b[A-Z][a-z]*\b/g;
console.log(s.match(pattern));

// Task 4

s = 'i live in 475km far away frim 10km close to mumbai it take 1 hour';
pattern = /\d{1,}/g
console.log(s.match(pattern));

 let text = "My numbers are 1, 42, 123, and 7890.";
 let regex = /\d+/g;
 let matches = text.match(regex);
    console.log(matches); // ["42", "123", "7890"]


    // Activity 3
    //Task 5 

    s = '(123) 456-7890';
    pattern = /\((\d{3})\)\s+(\d{3})-(\d{4})/;
    console.log(s.match(pattern))
    
    // TAsk 6 

    const email = "Pankaj@Google.com";
    pattern = /(\w+)@(\w+\.\w+)/;

    console.log(email.match(pattern));


// Activity 4 

// TAsk 7 
s = 'hello My World';
pattern = /^[A-Za-z]+/
// pattern = /^hello/
console.log(s.match(pattern));

// Task 8 

s = 'hello my lovely Monika';
pattern = /Monika$/
console.log(s.match(pattern));


// Activity  5
// Task 9
s = '#PankajThakur456@';
pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
console.log(pattern.test(s));
console.log(pattern.lastIndex);
// console.log(s.match(pattern));




// Task 10
const url = "https://www.example.com";;
 const  re = /^(https?:\/\/)?(www\.)?[\w-]+\.\w+$/

 const isValid = re.test(url);
    console.log(isValid);
 


