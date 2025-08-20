import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";
import type { Stack } from "@/lib/shared/types/stack";

export interface WorkExperience extends Timeline {
    image: string;
    position: string;
    workType: string;
    about: string;
    employmentType: string;
    url: string;
    leftReason?: string;
    descriptions: string[];
    stacks: Partial<Record<Stack, string[]>>;
}
