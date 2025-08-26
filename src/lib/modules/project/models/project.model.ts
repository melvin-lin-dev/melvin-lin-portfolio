import type { Stack } from "@/lib/shared/types/stack";
import type { ProjectCodeSnippet } from "./project-code-snippet.model";

export interface Project {
    id: number;
    title: string;
    description: string;
    stacks: Partial<Record<Stack, string[]>>;
    thumbnail: string;
    previews: string[];
    repositoryLink?: string;
    codeSnippets?: ProjectCodeSnippet[];
    isHighlight?: boolean;
}
