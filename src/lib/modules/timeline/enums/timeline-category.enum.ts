export enum TimelineCategory {
    WORK_EXPERIENCE = "work-experience",
    EDUCATION = "education",
    CAREER_BREAK = "career-break",
    COMPETITION = "competition",
    TRAINING = "training",
}

export const timelineColorMeta: Record<TimelineCategory, Record<"primary" | "secondary", string>> = {
    [TimelineCategory.WORK_EXPERIENCE]: { primary: "#0ea5e9", secondary: "#FFF" },
    [TimelineCategory.EDUCATION]: { primary: "#10b981", secondary: "#FFF" },
    [TimelineCategory.CAREER_BREAK]: { primary: "#f59e0b", secondary: "#FFF" },
    [TimelineCategory.COMPETITION]: { primary: "#f43f5e", secondary: "#FFF" },
    [TimelineCategory.TRAINING]: { primary: "#8b5cf6", secondary: "#FFF" },
};

type timelineMeta = {
    text: string;
    icon: string;
};

export const timelineMeta: Record<TimelineCategory, timelineMeta> = {
    [TimelineCategory.WORK_EXPERIENCE]: {
        text: "Work Experience",
        icon: "briefcasebusiness",
    },
    [TimelineCategory.EDUCATION]: {
        text: "Education",
        icon: "graduationcap",
    },
    [TimelineCategory.CAREER_BREAK]: {
        text: "Career Break",
        icon: "monitorpause",
    },
    [TimelineCategory.COMPETITION]: {
        text: "Competition",
        icon: "trophy",
    },
    [TimelineCategory.TRAINING]: {
        text: "Training",
        icon: "laptopminimal",
    },
};
