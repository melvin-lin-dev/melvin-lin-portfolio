import type { WorkExperience } from "../models/work-experience.model";
import workExperiences from "@/lib/modules/work-experience/data/work-experiences.data.json";

export function getWorkExperiences(): WorkExperience[] {
    return workExperiences.map((workExperience) => ({
        ...workExperience,
        icon: "briefcasebusiness",
        style: { icon: { background: "#0ea5e9", color: "#fff" } },
    }));
}
