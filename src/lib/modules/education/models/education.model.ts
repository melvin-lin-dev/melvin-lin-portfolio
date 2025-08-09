import type { Timeline } from "@/lib/shared/models/timeline.model";

export interface Education extends Timeline {
    icon: string;
    image: string;
    name: string;
    degree: string;
    major: string;
}
