import type { CSSProperties } from "react";

export interface Timeline {
    id: number;
    icon: string;
    style: Record<'icon', CSSProperties>
    startDate: string;
    endDate: string;
    location: string;
}