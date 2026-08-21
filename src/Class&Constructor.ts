export class Vehicle{
    id:number;
    name:string;
    brand:string;

    constructor(id:number,name:string,brand:string){
        this.id = id,
        this.name=name,
        this.brand=brand

    }
}

const v1 = new Vehicle(1,"Van","vlxi");
console.log(v1);

// same thing in one line
class Computer{
    constructor(
        public id:number,
        public name:string,
        public brand:string
    ){}
}
const computer = new Computer(101, "MacBook Pro", "Apple");
console.log(computer);

