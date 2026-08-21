type UserRole = Record<string, string>;
declare const userRole: UserRole;
declare const usrRole: string;
type ActionStatus = "pending" | "passed" | "failed";
type ActionResult = "success" | "skip" | "fail";
type Action = ActionStatus | ActionResult;
declare const statusManager: Record<Action, string>;
interface User {
    id: number;
    name: string;
    role: string;
}
declare const userRecords: Record<string, User>;
declare const apiUsers: User[];
declare const users: Record<string, User>;
