import type { SkillLevelWindRoseChart } from "@/types/react-plotly/skill-level-wind-rose-chart";

const skillLevels: SkillLevelWindRoseChart[] = [
    {
        max: 2,
        color: "rgba(204, 251, 241, 0.8)",
        label: "Beginner",
        description: "Exploring basics, following tutorials",
    },
    {
        max: 4,
        color: "rgba(153, 246, 228, 0.8)",
        label: "Novice",
        description: "Can build simple components or pages",
    },
    {
        max: 6,
        color: "rgba(94, 234, 212, 0.8)",
        label: "Intermediate",
        description: "Can build small apps with guidance",
    },
    {
        max: 8,
        color: "rgba(103, 232, 249, 0.8)",
        label: "Advanced",
        description: "Can build full apps with common patterns",
    },
    {
        max: 10,
        color: "rgba(34, 211, 238, 0.8)",
        label: "Expert",
        description: "Handles complex apps and optimizations",
    },
];

export default skillLevels;
