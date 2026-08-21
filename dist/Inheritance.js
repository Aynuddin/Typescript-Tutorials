"use strict";
class Animal {
    name;
    price;
    constructor(name, price) {
        this.name = name,
            this.price = price;
    }
    bark() {
        console.log(`${this.name} bark meow meow`);
    }
}
class Dog extends Animal {
    bread;
    constructor(name, bread, price) {
        super(name, price);
        this.bread = bread;
    }
    priceDetails() {
        console.log(`Amount of pet animals ${this.price}`);
    }
}
const dog = new Dog("Cat", "cat", 8000);
dog.bark();
dog.priceDetails();
