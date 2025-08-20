import type { ExternalProfile } from "@/lib/modules/external-profile/models/external-profile.model";
import type { ReactElement } from "react";
import ExternalProfileItem from "../../components/ExternalProfileItem";

type ContactContainerProps = {
    externalProfiles: ExternalProfile[];
};

export default function ContactContainer({ externalProfiles }: ContactContainerProps): ReactElement {
    return (
        <ul className="space-y-0.5">
            {externalProfiles.map((externalProfile) => (
                <li key={externalProfile.platform}>
                    <ExternalProfileItem externalProfile={externalProfile} />
                </li>
            ))}
        </ul>
    );
}
