
let data = 'Secret info'
class User{

    constructor(name , email){
        this.email = email;
        this.name = name;
    }


    viewData(){
        console.log("Website Data :  , " , data);
    }


}



class Admin extends User {

    constructor(name , email){
        super(name , email);
    }

    editData(){
        data = 'some new Value'
    }
}

let student1 = new User('pankaj' , 'asndjsb@12');
let student2 = new User('monika' , 'awhaj@hj1');

let teacher1 = new User('dean' , 'dean@college.com')

teacher1.viewData()

let admin1 = new Admin('khushi' , 'sfhoi@1231');
admin1.editData();
admin1.viewData();