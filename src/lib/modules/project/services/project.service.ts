import type { Project } from "../models/project.model";
import projects from "@/lib/modules/project/data/projects.data.json";

export function getProjects(): Project[] {
    return projects;
}