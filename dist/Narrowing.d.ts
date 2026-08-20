declare function calculate(val: number | string): void;
interface Department {
    deptId: number;
    name: string;
}
interface EmployeeD {
    empId: number;
    name: string;
}
declare function findDetails(request: Department | EmployeeD): void;
declare class Book {
    private bookId;
    private bname;
    constructor(bookId: number, bname: string);
}
declare class Student {
    private stdId;
    private sname;
    constructor(stdId: number, sname: string);
}
declare function findObjDeatils(req: Book | Student): void;
