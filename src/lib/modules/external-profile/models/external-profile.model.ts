import type { ExternalProfileType } from "../enums/external-profile-type.enum";

export interface ExternalProfile {
    platform: string;
    url: string;
    icon: string;
    description: string | null;
    type: ExternalProfileType;
}