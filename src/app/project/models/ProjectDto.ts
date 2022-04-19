import { Category } from "./category";
import { ProfileDto } from "./ProfileDto";

export interface ProjectDto{
    code:string;
    name:string;
    description:string;
    url:string;
    category:Category;
    owner:ProfileDto;
    createdAt:Date;
    team:Array<ProfileDto>;
}