import { SkillProficiency } from "./skill-proficiency.model";
import { SkillTool } from "./skill-tool.model";

export interface Skill {
    languages: SkillProficiency[];
    frameworks: SkillProficiency[];
    tools: SkillTool[];
    spokenLanguages: SkillProficiency[];
}
