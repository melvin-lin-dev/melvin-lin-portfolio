import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";
import { getWorkExperiences } from "./work-experience.service";
import { getEducations } from "./education.service";
import { getCareerBreaks } from "./career-break.service";
import { getCompetitions } from "./competition.service";
import { getTrainings } from "./training.service";

export function getTimeline(): Timeline[] {
    return [...getWorkExperiences(), ...getEducations(), ...getCareerBreaks(), ...getCompetitions(), ...getTrainings()].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}
