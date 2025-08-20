import type { SkillProficiency } from "./skill-proficiency.model";
import type { SkillTool } from "./skill-tool.model";

export interface Skill {
    languages: SkillProficiency[];
    frameworks: SkillProficiency[];
    tools: SkillTool[];
    spokenLanguages: SkillProficiency[];
}
