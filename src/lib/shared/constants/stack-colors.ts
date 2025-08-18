import type { Stack } from "../types/stack";

const STACK_COLORS: Record<Stack, string> = {
    markupLanguages: "#E34F26",
    styleLanguages: "#00BC7D",
    programmingLanguages: "#F97316",
    frameworks: "#3B82F6",
    preprocessors: "#8B5CF6",
    cssFrameworks: "#EC4899",
    databases: "#009965",
    tools: "#6B7280",
} as const;

export default STACK_COLORS;
