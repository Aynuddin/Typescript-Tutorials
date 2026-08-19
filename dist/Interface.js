"use strict";
let user = {
    id: 100,
    name: 'Ayn',
    email: "ayn@gmail.com"
};
console.log(user);
// here to do this i need to make optional email field, otherwise error will come
let user2 = {
    id: 101,
    name: 'Ayn'
};
console.log(user2);
let manager = {
    id: 102,
    name: "Ayn",
    projectId: 12
};
let multipley = (a, b) => {
    return a * b;
};
console.log(multipley(3, 4));
let employee = {
    name: "Ayn",
    employeeDetails() {
        console.log("Employee details!!!!!");
    }
};
employee.employeeDetails();
console.log(employee.name);
let emp = {
    id: 200,
    name: "Ayn",
    phone: 9876543456
};
emp.name = "Uddin";
console.log(emp);
