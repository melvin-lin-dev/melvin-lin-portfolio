import type { Training } from "../models/training.model";
import trainings from "../data/trainings.data.json";
import { TimelineCategory } from "../enums/timeline-category.enum";

export function getTrainings(): Training[] {
    return trainings.map((training, i) => ({
        ...training,
        id: `${TimelineCategory.TRAINING}-${i + 1}`,
        category: TimelineCategory.TRAINING,
    }));
}
