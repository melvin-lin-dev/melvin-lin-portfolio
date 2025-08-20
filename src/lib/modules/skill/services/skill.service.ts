import type { Skill } from "../models/skill.model";
import skill from "@/lib/modules/skill/data/skill.data.json";

export function getSkill(): Skill {
    return skill;
}