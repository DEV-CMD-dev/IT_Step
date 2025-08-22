import { UserRole } from "./UserRole";

export class User {
    public id: string;
    public username: string;
    public passwordHash: string;
    public role: UserRole;
    public creationDate: Date;

    constructor(username: string, passwordHash: string, role: UserRole) {
        this.id = crypto.randomUUID();
        this.username = username;
        this.passwordHash = passwordHash;
        this.role = role;
        this.creationDate = new Date();
    }
}