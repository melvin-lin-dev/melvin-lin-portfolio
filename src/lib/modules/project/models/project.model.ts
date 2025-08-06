import { ProjectCode } from "./project-code.model";

export interface Project {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    repositoryLink: string;
    code: ProjectCode[];
}