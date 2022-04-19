import { User } from "src/app/project/models/user";
import { Category } from "./category";

export interface Project{
    code:string;
    name:string;
    description:string;
    url:string;
    category:Category;
    owner:User;
    createdAt:Date;
    team:Array<User>;
    tasks:Array<Task>;
    

}