interface User{
    [key:string]:string | number | boolean
}

interface Employees {
  [key:number | string ] : string | number | boolean
}

 const usr: User={
    id:1,
    name:"Uddin",
    isLoggedIn:true
}

console.log("User details",usr);

let emp1: Employees = {
    userId:19990,
    name:"Uddin",
    empCode:102,
    active:true
}
console.log(emp1);
// it will convert into string 
const e = JSON.stringify(emp1) // convert json into string
console.log(e);
//console.log(e.userId); // giving error
// again it will convert into json object
const jsn = JSON.parse(e); 
console.log(jsn);


