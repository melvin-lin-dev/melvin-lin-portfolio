import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";
import { getCareerBreaks } from "./career-break.service";
import { getCompetitions } from "./competition.service";
import { getContinuousLearnings } from "./continuous-learning.service";
import { getEducations } from "./education.service";
import { getTrainings } from "./training.service";
import { getWorkExperiences } from "./work-experience.service";

export function getTimeline(): Timeline[] {
    return [...getWorkExperiences(), ...getEducations(), ...getCareerBreaks(), ...getCompetitions(), ...getTrainings(), ...getContinuousLearnings()].sort(
        (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
}
