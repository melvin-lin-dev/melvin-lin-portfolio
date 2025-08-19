import type { WorkExperience } from "../models/work-experience.model";
import workExperiences from "../data/work-experiences.data.json";

export function getWorkExperiences(): WorkExperience[] {
    return workExperiences.map((workExperience, i) => ({
        ...workExperience,
        id: i + 1,
        icon: "briefcasebusiness",
        style: { icon: { background: "#0ea5e9", color: "#fff" } },
    }));
}
