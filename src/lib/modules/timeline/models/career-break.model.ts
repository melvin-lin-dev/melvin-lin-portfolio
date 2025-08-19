import type { Timeline } from "@/lib/shared/models/timeline.model";

export interface CareerBreak extends Timeline {
    title: string;
    reason: string;
    note: string;
    descriptions: string[];
}
