import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import { getCodingProfiles, getContactLinks } from "@/lib/modules/external-profile/services/external-profile.service";
import { useMemo, type ReactElement } from "react";
import styles from "./contact-container.module.scss";

const getExternalProfileProps = (platform: string) => (platform === "Email" ? {} : { target: "_blank", rel: "noopener noreferrer" });

export default function Contact3DContainer(): ReactElement {
    const externalProfiles = useMemo(() => [...getContactLinks(), ...getCodingProfiles()], []);

    return (
        <ul className={styles.contact3d}>
            {externalProfiles.map((externalProfile) => (
                <li key={externalProfile.platform}>
                    <a href={externalProfile.url} {...getExternalProfileProps(externalProfile.platform)}>
                        <IconWrapper name={externalProfile.icon} className="w-8 h-8" />
                    </a>
                </li>
            ))}
        </ul>
    );
}
