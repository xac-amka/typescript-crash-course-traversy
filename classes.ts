interface UserInterface{
    name: string; 
    email: string; 
    age: number;
    register();
    payInvoice();
}

class User {
    public name: string;
    protected email: string;
    private age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: '+ this.name);
    }

    public register(){
        console.log(this.name+' is now registered');
    }

    payInvoice(){
        console.log(this.name+' paid Invoice');
    }
}

class Member extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

// let amkaUser = new User('Amka Doe', 'amka@asd.mn', 12);

// amkaUser.register();

let amkaMember:User = new Member(1, 'Amka Doe', 'amka@asd.mn', 12);

amkaMember.payInvoice();