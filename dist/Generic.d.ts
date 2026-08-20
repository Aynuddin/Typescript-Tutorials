declare function add<T>(a: T, b: T): T;
declare function getRes<T>(val: T): void;
declare function check<T>(value: T): T;
interface Person1 {
    id: number;
    name: string;
    status?: string;
}
declare const person: Person1;
interface Laptop {
    id: number;
    name: string;
    brand: string;
}
declare const laptop: Laptop;
declare const laptop1: Laptop;
declare const laptop2: Laptop;
declare function getFirstObj<T>(data: T[]): T;
declare let ele: number;
declare let lapList: Laptop[];
declare let lap: Laptop;
interface ApiResponse<T> {
    status: boolean;
    data: T;
}
declare let apiRes: ApiResponse<string>;
interface DUser {
    id: number;
    name: string;
    age: number;
}
declare let dusr: DUser;
declare let apiResponse1: ApiResponse<DUser>;
