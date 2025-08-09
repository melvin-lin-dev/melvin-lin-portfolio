import type { ProjectCodeSnippet } from "./project-code-snippet.model";

export interface Project {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    repositoryLink: string;
    codeSnippets: ProjectCodeSnippet[];
}