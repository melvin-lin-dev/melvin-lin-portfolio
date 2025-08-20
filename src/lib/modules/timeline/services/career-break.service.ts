import careerBreaks from "../data/career-breaks.data.json";
import { TimelineCategory } from "../enums/timeline-category.enum";
import type { CareerBreak } from "../models/career-break.model";

export function getCareerBreaks(): CareerBreak[] {
    return careerBreaks.map((careerBreak, i) => ({
        ...careerBreak,
        id: `${TimelineCategory.CAREER_BREAK}-${i + 1}`,
        category: TimelineCategory.CAREER_BREAK,
    }));
}
