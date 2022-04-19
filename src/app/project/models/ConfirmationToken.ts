import { User } from "./user";

export interface ConfirmationToken{
    id:number;
    confirmationToken:string;
    createdDate:Date;
    user:User;
}