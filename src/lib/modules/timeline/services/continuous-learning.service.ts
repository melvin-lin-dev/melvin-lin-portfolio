import continuousLearnings from "../data/continuous-learnings.data.json";
import { TimelineCategory } from "../enums/timeline-category.enum";
import type { ContinuousLearning } from "../models/continuous-learning.model";

export function getContinuousLearnings(): ContinuousLearning[] {
    return continuousLearnings.map((continuousLearning, i) => ({
        ...continuousLearning,
        id: `${TimelineCategory.CONTINUOUS_LEARNING}-${i + 1}`,
        category: TimelineCategory.CONTINUOUS_LEARNING,
    }));
}
