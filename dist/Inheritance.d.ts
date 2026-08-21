declare class Animal {
    private name;
    protected price: number;
    constructor(name: string, price: number);
    bark(): void;
}
declare class Dog extends Animal {
    bread: string;
    constructor(name: string, bread: string, price: number);
    priceDetails(): void;
}
declare const dog: Dog;
