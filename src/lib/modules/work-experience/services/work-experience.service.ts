import type { WorkExperience } from "../models/work-experience.model";
import workExperiences from "@/lib/modules/work-experience/data/work-experiences.data.json";

export function getWorkExperiences(): WorkExperience[] {
    return workExperiences;
}