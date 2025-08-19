import type { CSSProperties } from "react";

export enum TimelineCategory {
    WorkExperience = "work-experience",
    Education = "education",
    CareerBreak = "career-break",
    Competition = "competition",
    Training = "training",
}

export type TimelineMetaItem = {
    icon: string;
    component: string;
    style: Record<"icon", CSSProperties>;
};

export const TimelineMeta: Record<TimelineCategory, TimelineMetaItem> = {
    [TimelineCategory.WorkExperience]: {
        icon: "briefcasebusiness",
        component: "WorkExperienceTimelineItem",
        style: { icon: { backgroundColor: "#0ea5e9", color: "#fff" } },
    },
    [TimelineCategory.Education]: {
        icon: "graduationcap",
        component: "EducationTimelineItem",
        style: { icon: { backgroundColor: "#14b8a6", color: "#fff" } },
    },
    [TimelineCategory.CareerBreak]: {
        icon: "monitorpause",
        component: "CareerBreakTimelineItem",
        style: { icon: { backgroundColor: "#14b8a6", color: "#fff" } },
    },
    [TimelineCategory.Competition]: {
        icon: "trophy",
        component: "CompetitionTimelineItem",
        style: { icon: { backgroundColor: "#14b8a6", color: "#fff" } },
    },
    [TimelineCategory.Training]: {
        icon: "laptopminimal",
        component: "TrainingTimelineItem",
        style: { icon: { backgroundColor: "#14b8a6", color: "#fff" } },
    },
};
