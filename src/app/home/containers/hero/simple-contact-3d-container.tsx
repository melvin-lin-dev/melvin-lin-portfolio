import ElevatedButton from "@/common/components/buttons/three-dimension-button/elevated-button/ElevatedButton";
import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import { getCodingProfiles, getContactLinks } from "@/lib/modules/external-profile/services/external-profile.service";
import { useMemo, type ReactElement } from "react";

const getExternalProfileProps = (platform: string) => (platform === "Email" ? {} : { target: "_blank", rel: "noopener noreferrer" });

export default function SimpleContact3DContainer(): ReactElement {
    const externalProfiles = useMemo(() => [...getContactLinks(), ...getCodingProfiles()], []);

    return (
        <ul className="flex space-x-3">
            {externalProfiles.map((externalProfile) => (
                <li key={externalProfile.platform}>
                    <ElevatedButton href={externalProfile.url} color="white" className="relative w-12 h-12 rounded-full" {...getExternalProfileProps(externalProfile.platform)} >
                        <IconWrapper name={externalProfile.icon} className="absolute top-1/2 left-1/2 -translate-1/2 w-5.5 h-5.5 sm:w-6 sm:h-6" />
                    </ElevatedButton>
                </li>
            ))}
        </ul>
    );
}
