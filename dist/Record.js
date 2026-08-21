"use strict";
// Record in TS means it is a utility type which allows a specific keys and a specific value type
// Syntax: type User = Record<string,string>
const userRole = {
    admin: "Full Access",
    user: "Limited Access",
    guest: "Read Only"
};
const usrRole = userRole.admin;
console.log(usrRole);
const statusManager = {
    pending: "Action is pending",
    passed: "Action is passed",
    failed: "Action is failed",
    success: "Result is sucess",
    skip: "Action is skiped",
    fail: "Result is failed"
};
console.log(statusManager.skip);
const userRecords = {};
userRecords["user1"] = {
    id: 101,
    name: "Ayn",
    role: "Admin"
};
userRecords["user2"] = {
    id: 102,
    name: "Uddin",
    role: "User"
};
console.log(userRecords);
// now real time
const apiUsers = [
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
const users = {};
//let userId = crypto.randomUUID();
for (const user of apiUsers) {
    users[crypto.randomUUID()] = user;
}
console.log(users);
