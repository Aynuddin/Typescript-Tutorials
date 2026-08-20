interface User {
    [key: string]: string | number | boolean;
}
interface Employees {
    [key: number | string]: string | number | boolean;
}
declare const usr: User;
declare let emp1: Employees;
declare const e: string;
declare const jsn: any;
