import type { TimelineCategory } from "../enums/timeline-category.enum";

export interface Timeline {
    id: string;
    title: string;
    category: TimelineCategory;
    startDate: string;
    endDate: string;
    location?: string;
    note?: string;
}
