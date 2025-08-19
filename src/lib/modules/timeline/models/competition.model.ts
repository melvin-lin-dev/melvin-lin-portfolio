import type { Timeline } from "@/lib/shared/models/timeline.model";

export interface Competition extends Timeline {
    name: string;
    image: string;
    organization: string;
    organizationImage: string;
    organizationStyle: Record<"color" | "backgroundColor", string>;
    descriptions: string[];
}
