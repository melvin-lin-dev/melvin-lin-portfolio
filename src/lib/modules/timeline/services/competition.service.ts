import type { Competition } from "../models/competition.model";
import competitions from "../data/competitions.data.json";

export function getCompetitions(): Competition[] {
    return competitions.map((competition, i) => ({
        ...competition,
        id: i + 1,
        icon: "trophy",
        style: { icon: { background: "#14b8a6", color: "#fff" } },
    }));
}
