import type { RefObject } from "react";

export type AboutNodeData = {
    icon: string;
    label: string;
    description: string;
    mainEffectRef: RefObject<HTMLDivElement | null>;
    parentRef: RefObject<HTMLDivElement | null>;
};
