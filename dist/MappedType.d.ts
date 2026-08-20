interface Car {
    carno: number;
    carname: string;
    carmodel: string;
}
type optionalCar = {
    [K in keyof Car]?: Car[K];
};
declare const car: optionalCar;
declare const car1: optionalCar;
