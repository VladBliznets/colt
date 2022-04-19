import {Category} from "./category"
export interface CreateProjectDto{
    name:string;
    description:string;
    url:string;
    category:Category;
}