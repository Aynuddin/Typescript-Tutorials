interface Person {
    id: number;
    name: string;
    email?: string;
    phone: string;
}
declare const Add: (a: number, b: number) => number;
declare const personDetails: (details: Person) => void;
