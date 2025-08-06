import { Achievement } from "../models/achievement.model";
import achievements from "@/lib/modules/achievement/data/achievements.data.json";

export function getAchievements(): Achievement[] {
    return achievements;
}