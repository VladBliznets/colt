import { ProfileDto } from "./ProfileDto";
import { Status } from "./status";
import { Type } from "./type";

export interface TaskDto{
    id:number;
    title:string;
    description:string;
    type:Type;
    status:Status;
    createdAt:Date;
    updatedAt:Date;
    reporter:ProfileDto;
    members:Array<ProfileDto>;
}