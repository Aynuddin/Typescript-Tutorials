class Animal{
    private name:string;
    protected price:number
    constructor(name:string,price:number){
        this.name=name,
        this.price=price
    }

    bark(){
        console.log(`${this.name} bark meow meow`);  
    }
}

class Dog extends Animal{

    constructor(name:string, public bread:string,price:number){
        super(name,price);
    }

    priceDetails(){
        console.log(`Amount of pet animals ${this.price}`);  
    }
}

const dog = new Dog("Cat","cat",8000);
dog.bark();
dog.priceDetails()

