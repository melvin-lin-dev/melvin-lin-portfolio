import workExperiences from "../data/work-experiences.data.json";
import { TimelineCategory } from "../enums/timeline-category.enum";
import type { WorkExperience } from "../models/work-experience.model";

export function getWorkExperiences(): WorkExperience[] {
    return workExperiences.map((workExperience, i) => ({
        ...workExperience,
        id: `${TimelineCategory.WORK_EXPERIENCE}-${i + 1}`,
        category: TimelineCategory.WORK_EXPERIENCE,
    }));
}
