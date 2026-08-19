interface User {
    id: number;
    name: string;
    email?: string;
}
declare let user: User;
declare let user2: User;
interface Project {
    projectId: number;
}
interface Manager extends Project {
    id: number;
    name: string;
}
declare let manager: Manager;
type project = "todo" | "inprogress" | "finished";
interface Multiply {
    (a: number, b: number): number;
}
declare let multipley: Multiply;
interface Employee {
    name: string;
    employeeDetails(): void;
}
declare let employee: Employee;
interface EmployeeList {
    readonly id: number;
    name: string;
    phone: number;
}
declare let emp: EmployeeList;
