import careerBreaks from "../data/career-breaks.data.json";
import type { CareerBreak } from "../models/career-break.model";

export function getCareerBreaks(): CareerBreak[] {
    return careerBreaks.map((careerBreak, i) => ({
        ...careerBreak,
        id: i + 1,
        icon: "monitorpause",
        style: { icon: { background: "#14b8a6", color: "#fff" } },
    }));
}
