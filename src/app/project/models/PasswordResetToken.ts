import { User } from "./user";

export interface PasswordResetToken{
    id:number;
    resetToken:string;
    createdDate:Date;
    expiredDate:Date;
    user:User;
    
}