import educations from "../data/educations.data.json";
import { TimelineCategory } from "../enums/timeline-category.enum";
import type { Education } from "../models/education.model";

export function getEducations(): Education[] {
    return educations.map((education, i) => ({
        ...education,
        id: `${TimelineCategory.EDUCATION}-${i + 1}`,
        category: TimelineCategory.EDUCATION,
    }));
}
