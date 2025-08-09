import codingProfiles from "@/lib/modules/external-profile/data/coding-profiles.data.json";
import contactLinks from "@/lib/modules/external-profile/data/contact-links.data.json";
import { ExternalProfileType } from "../enums/external-profile-type.enum";
import type { ExternalProfile } from "../models/external-profile.model";

export function getContactLinks(): ExternalProfile[] {
    return contactLinks.map((externalProfile) => ({ ...externalProfile, type: ExternalProfileType.Contact }));
}
export function getCodingProfiles(): ExternalProfile[] {
    return codingProfiles.map((externalProfile) => ({ ...externalProfile, type: ExternalProfileType.Coding }));
}
