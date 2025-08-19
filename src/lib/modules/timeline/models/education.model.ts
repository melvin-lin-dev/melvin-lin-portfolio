import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";

export interface Education extends Timeline {
    icon: string;
    image: string;
    degree: string;
    major: string;
}
