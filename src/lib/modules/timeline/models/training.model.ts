import type { Timeline } from "@/lib/shared/models/timeline.model";

export interface Training extends Timeline {
    name: string;
    descriptions: string[]
}
