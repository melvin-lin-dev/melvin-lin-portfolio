import type { SkillLevelWindRoseChart } from "@/types/react-plotly/skill-level-wind-rose-chart";

const skillLevels: SkillLevelWindRoseChart[] = [
    {
        max: 2,
        color: "rgba(204, 251, 241, 0.8)", // teal-100
        label: "Beginner",
    },
    {
        max: 4,
        color: "rgba(153, 246, 228, 0.8)", // teal-200
        label: "Novice",
    },
    {
        max: 6,
        color: "rgba(94, 234, 212, 0.8)", // teal-300
        label: "Intermediate",
    },
    {
        max: 8,
        color: "rgba(103, 232, 249, 0.8)", // cyan-300
        label: "Advanced",
    },
    {
        max: 10,
        color: "rgba(34, 211, 238, 0.8)", // cyan-400
        label: "Expert",
    },
];

export default skillLevels;
