import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";

export interface Competition extends Timeline {
    image: string;
    organization: string;
    organizationImage: string;
    organizationStyle: Record<"color" | "backgroundColor", string>;
    descriptions: string[];
}
