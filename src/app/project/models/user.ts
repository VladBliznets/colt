import { Role } from "./role";
import {Task} from "./task";
import {Project} from "./project";


 export interface User {
    id: number;
    email: string;
    username: string;
    avatar: string;
    latitude: number;
    longitude: number;
    firstName: string;
    lastName: string;
    password:string;
    birthDay:Date;
    locked:boolean;
    active:boolean;
    createdAt:Date;
    updatedAt:Date;
    roles:Set<Role>;
    imageName:string;
    imageUrl:string;
    telegramId:number;
    own_projects:Array<Project>;
    projects:Array<Project>;
    tasks:Array<Task>;
    reporter_tasks:Array<Task>;
    comments:Array<Comment>;
}
