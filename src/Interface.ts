interface User {
    id:number,
    name:string,
    email?:string
}

let user:User = {
    id:100,
    name:'Ayn',
    email:"ayn@gmail.com"
}
console.log(user);
// here to do this i need to make optional email field, otherwise error will come
let user2:User = {
    id:101,
    name:'Ayn'
}
console.log(user2);

// two interface we can extends
interface Project{
    projectId:number
}
interface Manager extends Project{
    id:number,
    name:string
}

let manager:Manager={
    id:102,
    name:"Ayn",
    projectId:12
}

// difference between type and interface
// in type you can use union(|) that can't do with interface
type project = "todo" | "inprogress" | "finished";

// Interface using function
interface Multiply{
    (a:number,b:number):number
}

let multipley:Multiply =(a,b)=>{
    return a*b;
}
console.log(multipley(3,4));

// interface with method
interface Employee{
    name:string,
    employeeDetails():void
}

let employee: Employee = {
    name:"Ayn",
    employeeDetails(){
        console.log("Employee details!!!!!");
    }
}
employee.employeeDetails();
console.log(employee.name);

//readonly Properties
interface EmployeeList{
   readonly id:number,
   name:string,
   phone:number
}

let emp: EmployeeList = {
    id:200,
    name:"Ayn",
    phone:9876543456
}
emp.name="Uddin"
console.log(emp);



