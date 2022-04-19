import { Type } from "./type";
import {Status} from "./status";

export interface EditTaskDto{
    title:string;
    description:string;
    type:Type;
    status:Status;
    reporter:string;
    members:Array<string>;
}