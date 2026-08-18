let value: string = "Ayn Uddin started doing TypeScript and Playwright on live coding session";
console.log(value);
// Number types in TypeScript
let username:string = "Ayn Uddin";
console.log(username);

const userId:number = 123456789;
console.log(userId);

const isLoggedIn:boolean = true;
console.log(isLoggedIn);

// Type inference in TypeScript
const num1 = "10";
console.log(typeof num1);

// any vs unknown types in TypeScript
let myVar: any = "Hello, World!";
myVar = 42; // Reassigning to a number
console.log(typeof myVar); // Output: "number"
if(typeof myVar === "string") {
    console.log(myVar.toUpperCase()); // Safe to call string methods
}else {
    console.log("myVar is not a string");
}
//console.log(myVar); 

let sname: unknown = "Ayn Uddin";
sname = 42; // Reassigning to a number
console.log(typeof sname);
if(typeof sname === "string") {
    console.log(sname.toUpperCase()); // Safe to call string methods
}
//console.log(sname);

// BigInt data type
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+1);// both given sane
console.log(Number.MAX_SAFE_INTEGER+2);
// use of bigint
let bigintnum = 1234567899888888756789n;
console.log(bigintnum);
// another way to define
let bigNum: bigint = BigInt(9087654321234567878987654);
console.log(bigNum);

// Symbol data type
let token: symbol = Symbol("token");
console.log([token]);

//Type inference

let sname1 = "Ayn";
console.log(typeof sname1);

function add(a: number, b:number){
    return a+b;
}

console.log(typeof add(2,3));

// Arrays in TS
// one way
let marks: number[]  = [80,60,76]
console.log(marks);

// 2nd way using type <type>
let user: Array<string> = ["Ayn","Uddin","Khan"];
console.log(user);

let prices: number[] = [30,80,60,59];
console.log(prices);

let statusVal: boolean[] = [true,false,true];
console.log(statusVal);

// Arrays method operations
let nums: number[] = [12,34,54,27]

nums.push(13); // added in the last position
nums.pop() // remove from last position
nums.shift()// remove first position element
nums.unshift(23) // added in the first position
console.log(nums);

let users: (string | number)[] = ["Ayn",27,"Uddin",29]
users.push("Khain");
users.push(31);
users.push(34);
//users.push(true) // not able to assign boolean because users variable is only accept string | number
console.log(users);

// Arrays method like map,filter and reduce
// map operations
users.map(e => e.toString().toUpperCase()).forEach(d => console.log(d));

// filter operations
let numList: number[] = [];
users.filter(f => {
    if(typeof f === "number"){
        numList.push(f)
    }
})
console.log(numList);

// reduce function use case
let price: number[] = [100,200,600]
let total = price.reduce((sum,pri) => sum+pri ,0);
console.log(total);

// Tuples in TS
let obj: [string,number] = ["Ayn",28];
console.log(obj);

let obj1:[string,number,boolean] = ["Ayn",25,true];
console.log(obj1);
// Destructing this 
let [usrname,age,isLoggedin] = obj1;
console.log(age);

















