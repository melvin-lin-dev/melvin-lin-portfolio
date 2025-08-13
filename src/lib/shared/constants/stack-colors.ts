import type { Stack } from "../types/stack";

const STACK_COLORS: Record<Stack, string> = {
    frameworks: "#3B82F6", // blue-500 — trusted, professional
    languages: "#F59E0B", // amber-500 — vibrant, stands out
    cssFrameworks: "#EC4899", // pink-500 — creative, design-oriented
    preprocessors: "#8B5CF6", // violet-500 — techy, secondary to CSS frameworks
    databases: "#10B981", // emerald-500 — stable, growth/structured data
    tools: "#6B7280", // gray-500 — utility, neutral
} as const;

export default STACK_COLORS;
