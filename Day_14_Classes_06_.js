
// Activity 1 
// Task 1
class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

 
    greeting(){
        console.log(`Welcome ${this.name}`);
    }
    
    // Task 2
    updateAge(newAge){
        return this.age = newAge;
    }

    static genericGreet(){
        return 'Welcome to static method'
    }
}


const p1 = new Person('Pankaj Thakur' , 21);
p1.greeting();

// Task 2
console.log(p1.updateAge(25));



// Activity 2  Class inheritance

// Task  3
class Student extends Person {
    static totalStudent = 0;
    constructor(name , age , studentId){
        super(name , age)
        this.studentId = studentId;
        Student.totalStudent++;
    }
    
    static getStudentCount(){
        return `total Student count is ${Student.totalStudent}`
    }

    getId(){
        return `Student ID: ${this.studentId}`;
    }
    
    greeting(newId){
        this.studentId =  newId
        return `the new ID is :  ${this.studentId}`
    }
}

const s1 = new Student('pankaj' , 21 , 1);
// const s2 = new Student('pankaj' , 21 , 1);
console.log(s1.getId());
console.log(s1.greeting(2));
console.log(Student.totalStudent);


// Activity 3  Sattic Method and properties

// Task 5 
console.log(Person.genericGreet());


// Task 6 

console.log(Student.getStudentCount());


// Activity 4  Getters and Setters

class Person2  {
    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fName(fName){
        this.firstName = fName ;
    }

    set lName(lName){
        this.lastName =  lName; 
    }

    set fullName(newName){
        const parts = newName.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}


const p2 =  new Person2('Pankaj' , 'thakur' , 25);
p2.fName = 'Monika'
console.log(p2.fullName);



// Activity 5: Private Fields (Optional)
// Task 9 and 10
class Account{
    #balance = 0 ;

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited : ${amount} , Balance : ${this.#balance}`);
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance ){
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}, Balance: $${this.#balance}`);
        }else{
            console.log(`Insufficent balance or invalid amount`);
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const  account = new Account();
account.deposit(100);
console.log(`Balance : ${account.getBalance()}`);
account.withdraw(50);
console.log(`Balance : ${account.getBalance()}`);


// class User2  {
//     constructor(email){
//         this.email = email;
//     }

//     get email() {
//         return this._email;
//     }
//     set email(value) {
//         this._email = value;
//     }
// }

// const u2 = new User2('pakajs@');
// console.log(u2.email);