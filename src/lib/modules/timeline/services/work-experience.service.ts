import type { WorkExperience } from "../models/work-experience.model";
import workExperiences from "../data/work-experiences.data.json";
import { TimelineCategory } from "../enums/timeline-category.enum";

export function getWorkExperiences(): WorkExperience[] {
    return workExperiences.map((workExperience, i) => ({
        ...workExperience,
        id: `${TimelineCategory.WorkExperience}-${i + 1}`,
        category: TimelineCategory.WorkExperience
    }));
}
