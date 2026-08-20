"use strict";
const usr = {
    id: 1,
    name: "Uddin",
    isLoggedIn: true
};
console.log("User details", usr);
let emp1 = {
    userId: 19990,
    name: "Uddin",
    empCode: 102,
    active: true
};
console.log(emp1);
// it will convert into string 
const e = JSON.stringify(emp1); // convert json into string
console.log(e);
//console.log(e.userId); // giving error
// again it will convert into json object
const jsn = JSON.parse(e);
console.log(jsn);
