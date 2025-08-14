import type { Stack } from "../types/stack";

const STACK_COLORS: Record<Stack, string> = {
    markupLanguages: "#E34F26", // orange/red for structure
    styleLanguages: "#1572B6", // blue for styling
    programmingLanguages: "#F59E0B", // amber-500 — vibrant, stands out
    frameworks: "#3B82F6", // blue-500 — trusted, professional
    preprocessors: "#8B5CF6", // violet-500 — techy, secondary to CSS frameworks
    cssFrameworks: "#EC4899", // pink-500 — creative, design-oriented
    databases: "#10B981", // emerald-500 — stable, growth/structured data
    tools: "#6B7280", // gray-500 — utility, neutral
} as const;

export default STACK_COLORS;
