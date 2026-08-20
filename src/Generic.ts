
function add<T>(a: T, b: T): T {

    if (typeof a === "number" && typeof b === "number") {
        return (a + b) as T;
    }

    if (typeof a === "string" && typeof b === "string") {
        return (a + b) as T;
    }

    throw new Error("Only number or string types are supported");
}
console.log(add(4,5));

function getRes<T>(val: T){
    console.log(typeof val);
}
getRes(1);

// example
function check<T> (value: T): T{
    console.log(value);
    const res = JSON.stringify(value);
    const obj = JSON.parse(res);
    if(obj.brand){
        console.log(obj.brand);
    }
    console.log(obj.name);
    return value;
}

check<number>(10)
check<string>("Ayn")

interface Person1{
    id:number,
    name:string,
    status?:string
}
const person: Person1 ={
    id:12,
    name:"Ayn",
    status:"Single"
}
check<Person1>(person);

interface Laptop{
    id:number,
    name: string,
    brand: string
}
const laptop:Laptop = {
    id:102,
    name:"HP",
    brand:"HP-01"
}
const laptop1:Laptop = {
    id:102,
    name:"Lenevo",
    brand:"LV-01"
}
const laptop2:Laptop = {
    id:102,
    name:"DEL",
    brand:"DEL-01"
}

check<Laptop>(laptop);

function getFirstObj<T>(data: T[]): T{
    console.log(data);
    return data[1];
}

let ele = getFirstObj<number>([1,2,3,4,5])
console.log(ele);
let lapList: Laptop[] = [laptop,laptop1,laptop2];
lapList.push({
    id:12,
    name:"Samsung",
    brand:"Sam-01"
});
let lap = getFirstObj(lapList);
console.log(lap);

interface ApiResponse<T>{
    status:boolean,
    data: T
}

let apiRes:ApiResponse<string> = {
    status:true,
    data:"User"
}
console.log(apiRes);
interface DUser{
    id:number,
    name:string,
    age:number
}
let dusr:DUser = {
        id:102,
        name:"Ayn Uddin",
        age:28
    }
let apiResponse1: ApiResponse<DUser> = {
    status:true,
    data:dusr
}
console.log(apiResponse1);

// class ApiClient {

//     async get<T>(url: string): Promise<ApiResponse<T>> {

//         const response = await request.get(url);

//         return await response.json();
//     }
// }
// const userResponse = await apiClient.get<User>("/user");
// console.log(userResponse.data.name);


