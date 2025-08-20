import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";

export interface CareerBreak extends Timeline {
    reason: string;
    descriptions: string[];
}
