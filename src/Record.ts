
// Record in TS means it is a utility type which allows a specific keys and a specific value type
// Syntax: type User = Record<string,string>

type UserRole = Record<string,string>

const userRole:UserRole = {
    admin:"Full Access",
    user:"Limited Access",
    guest:"Read Only"
}

const usrRole = userRole.admin;
console.log(usrRole);

type ActionStatus = "pending" | "passed" | "failed";
type ActionResult = "success" | "skip" | "fail";

type Action = ActionStatus | ActionResult; // here or because any one can take, but & if used then in both common need to be there

const statusManager: Record<Action,string> =  {
    pending:"Action is pending",
    passed:"Action is passed",
    failed:"Action is failed",
    success:"Result is sucess",
    skip:"Action is skiped",
    fail:"Result is failed"

}

console.log(statusManager.skip);

// practical user
interface User {
    id: number;
    name: string;
    role: string;
}

const userRecords: Record<string,User> = {};
userRecords["user1"] = {
    id:101,
    name:"Ayn",
    role:"Admin"
}
userRecords["user2"] = {
    id:102,
    name:"Uddin",
    role:"User"
}
console.log(userRecords);

// now real time

const apiUsers: User[] = [
    {
        id: 101,
        name: "Ayn",
        role: "Admin"
    },
    {
        id: 102,
        name: "Uddin",
        role: "User"
    },
    {
        id: 103,
        name: "John",
        role: "Tester"
    }
];

const users: Record<string,User> = {};
//let userId = crypto.randomUUID();
for(const user of apiUsers){

    users[crypto.randomUUID()] = user
}
console.log(users);










