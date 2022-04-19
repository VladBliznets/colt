import { ProfileDto } from "./ProfileDto";

export interface CommentDto{
    id:number;
    text:string;
    createdAt:Date;
    task:number;
    user:ProfileDto;
    
}