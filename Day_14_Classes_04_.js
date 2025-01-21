

// ES6


class User {
    constructor (username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }


    encryptPasswprd(){
        return `${this.password}abs`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}` ;
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }

   static createID (){
        return `12345`;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }
}


class Teacher extends User{
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const p1 = new User('pankaj' , 'pakaj@456' , '13');

console.log(p1.password);
console.log(p1.email);
// console.log(p1.encryptPasswprd());
// console.log(p1.changeUsername());
// console.log(User.createID());


const t1 = new Teacher('Monika' , 'monika@123' ,'564' );
// t1.addCourse()
// t1.logMe()

const masalaHouse = new User('Rudvi Singh');
// masalaHouse.logMe();

// console.log(p1 instanceof User);
// console.log(p1 instanceof Teacher);
// console.log(t1 instanceof Teacher); 
// console.log(t1 instanceof User);





 



