import type { Education } from "../models/education.model";
import educations from "../data/educations.data.json";

export function getEducations(): Education[] {
    return educations.map((education, i) => ({
        ...education,
        id: i + 1,
        icon: "graduationcap",
        style: { icon: { background: "#14b8a6", color: "#fff" } },
    }));
}
