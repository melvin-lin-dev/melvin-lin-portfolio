import type { Education } from "../models/education.model";
import educations from "@/lib/modules/education/data/educations.data.json";

export function getEducations(): Education[] {
    return educations;
}