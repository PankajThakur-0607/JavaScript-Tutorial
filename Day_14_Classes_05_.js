

// property based 
function User(email , password){
    this._email = email;
    this._password = password;


    Object.defineProperty(this , 'email' , {
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value
        }
    })

   
}

const p1 = new User('pankaj@13' , '1235');
console.log(p1.email);


//  Object Based 

const Person = {
    _email : 'Minika@12',
    _password : 123,

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    }
}


const p2 =  Object.create(Person);
console.log(p2.email);

