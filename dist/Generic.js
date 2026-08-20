"use strict";
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b);
    }
    if (typeof a === "string" && typeof b === "string") {
        return (a + b);
    }
    throw new Error("Only number or string types are supported");
}
console.log(add(4, 5));
function getRes(val) {
    console.log(typeof val);
}
getRes(1);
// example
function check(value) {
    console.log(value);
    const res = JSON.stringify(value);
    const obj = JSON.parse(res);
    if (obj.brand) {
        console.log(obj.brand);
    }
    console.log(obj.name);
    return value;
}
check(10);
check("Ayn");
const person = {
    id: 12,
    name: "Ayn",
    status: "Single"
};
check(person);
const laptop = {
    id: 102,
    name: "HP",
    brand: "HP-01"
};
const laptop1 = {
    id: 102,
    name: "Lenevo",
    brand: "LV-01"
};
const laptop2 = {
    id: 102,
    name: "DEL",
    brand: "DEL-01"
};
check(laptop);
function getFirstObj(data) {
    console.log(data);
    return data[1];
}
let ele = getFirstObj([1, 2, 3, 4, 5]);
console.log(ele);
let lapList = [laptop, laptop1, laptop2];
lapList.push({
    id: 12,
    name: "Samsung",
    brand: "Sam-01"
});
let lap = getFirstObj(lapList);
console.log(lap);
let apiRes = {
    status: true,
    data: "User"
};
console.log(apiRes);
let dusr = {
    id: 102,
    name: "Ayn Uddin",
    age: 28
};
let apiResponse1 = {
    status: true,
    data: dusr
};
console.log(apiResponse1);
// class ApiClient {
//     async get<T>(url: string): Promise<ApiResponse<T>> {
//         const response = await request.get(url);
//         return await response.json();
//     }
// }
// const userResponse = await apiClient.get<User>("/user");
// console.log(userResponse.data.name);
