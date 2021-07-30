import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";
import * as mongoose from "mongoose";
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);



export class UserModel {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;   // girilen password
    passwordHash: string; // hash'lenen password
    birthDay: Date;
    audit: AuditModel;
    roles: RoleModel[];
    groups: GroupModel[];


}
export const UserSchema = new mongoose.Schema(
    {
        name: String,
        surname: String,
        image: String,
        email: String,
        password: String,   // girilen password
        passwordHash: String, // hash'lenen password
        birthDay: Date,
        audit: { type: Object },
        roles: Array,
        groups: Array,
    }
);

