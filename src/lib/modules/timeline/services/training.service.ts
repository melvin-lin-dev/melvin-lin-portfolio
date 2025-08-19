import type { Training } from "../models/training.model";
import trainings from "../data/trainings.data.json";

export function getTrainings(): Training[] {
    return trainings.map((training, i) => ({
        ...training,
        id: i + 1,
        icon: "trophy",
        style: { icon: { background: "#14b8a6", color: "#fff" } },
    }));
}
