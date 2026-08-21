"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    id;
    name;
    brand;
    constructor(id, name, brand) {
        this.id = id,
            this.name = name,
            this.brand = brand;
    }
}
exports.Vehicle = Vehicle;
const v1 = new Vehicle(1, "Van", "vlxi");
console.log(v1);
// same thing in one line
class Computer {
    id;
    name;
    brand;
    constructor(id, name, brand) {
        this.id = id;
        this.name = name;
        this.brand = brand;
    }
}
const computer = new Computer(101, "MacBook Pro", "Apple");
console.log(computer);
