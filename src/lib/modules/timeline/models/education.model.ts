import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";

export interface Education extends Timeline {
    image: string;
    degree: string;
    major: string;
}
