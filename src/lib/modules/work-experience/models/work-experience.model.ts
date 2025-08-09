import type { Timeline } from "@/lib/shared/models/timeline.model";

export interface WorkExperience extends Timeline {
    image: string;
    position: string;
    company: string;
    workType: string;
    about: string;
    employmentType: string;
    url: string;
    leftReason: string;
    note: string;
    descriptions: string[];
}