interface Person{
    id:number,
    name:string,
    email?:string,
    phone:string
}


const Add = (a:number,b:number):number =>{
    return a*b;
}

console.log(Add(2,3));

const personDetails = (details:Person) => {
    console.log(details);
}

personDetails({
    id:1,
    name:"Ayn",
    email:"ayn@gmail.com",
    phone:"7890109876"
})