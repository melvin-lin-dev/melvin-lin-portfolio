import competitions from "../data/competitions.data.json";
import { TimelineCategory } from "../enums/timeline-category.enum";
import type { Competition } from "../models/competition.model";

export function getCompetitions(): Competition[] {
    return competitions.map((competition, i) => ({
        ...competition,
        id: `${TimelineCategory.COMPETITION}-${i + 1}`,
        category: TimelineCategory.COMPETITION,
    }));
}
