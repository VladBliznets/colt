import {Type} from "./type"
export interface CreateTaskDto{
    title:string;
    description:string;
    type:Type;
    project:string;
    reporter:string;
    members:Array<string>;
}