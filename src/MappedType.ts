// mapped type in ts allows you to create a new type of transforming proprties of an existing type

interface Car{
    carno:number,
    carname:string,
    carmodel:string,
}

// here i need to make optional
type optionalCar = {
    [K in keyof Car]?: Car[K];
}

const car: optionalCar = {
    carname:"Hunda"
}
console.log(car);

const car1:optionalCar = {
    carno:7869,
    carmodel:"XVL12"
}
console.log(car1);

