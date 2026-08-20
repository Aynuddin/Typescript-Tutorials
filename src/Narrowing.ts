// checking typeof by using narrowing 
function calculate(val:number | string){
    if(typeof val === "string"){
        console.log(val.length)
    }else if(typeof val === "number"){
        console.log(val*3);
    }
}
calculate("Aynuddin")
calculate(9);

interface Department{
    deptId:number,
    name:string
}

interface EmployeeD{
    empId:number,
    name:string
}

function findDetails(request:Department | EmployeeD){
    // i will check first property contains or not using in and then process
    if("deptId" in request){
        console.log(`Department details ${request.deptId} ${request.name}`);
        if(typeof request.deptId === "number"){
            console.log(`Console the type ${typeof request.name}`);
            
        }
    }else{
        console.log(`Employee details ${request.empId} ${request.name}`);
    }
}
findDetails({
    deptId:123,
    name:"Ayn"
})

class Book {
    constructor(private bookId:number,private bname: string){

    }
}

class Student{
    constructor(private stdId:number, private sname:string){

    }
}

function findObjDeatils(req : Book | Student){
    if(req instanceof Book){
        console.log(`Book details: ${JSON.stringify(req)}`)
        const res = JSON.stringify(req);
        console.log("Property val :", JSON.parse(JSON.stringify(req)).bname);
    }else if (req instanceof Student){
        console.log(`Student details: ${JSON.stringify(req)}`);
    }
}
findObjDeatils(new Book(1,"Science"));
findObjDeatils(new Student(101,"Uddin"));

