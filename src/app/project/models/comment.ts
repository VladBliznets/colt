import { User } from "src/app/project/models/user";
import {Task} from "./task";

export interface Comment{
    id : number;
    text : string;
    task : Task;
    user : User;
    createdAt : Date;
}