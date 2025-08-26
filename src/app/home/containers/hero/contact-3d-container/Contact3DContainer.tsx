import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import { getCodingProfiles, getContactLinks } from "@/lib/modules/external-profile/services/external-profile.service";
import { useMemo, type ReactElement } from "react";
import styles from "./contact-3d-container.module.scss";

const getExternalProfileProps = (platform: string) => (platform === "Email" ? {} : { target: "_blank", rel: "noopener noreferrer" });

export default function Contact3DContainer(): ReactElement {
    const externalProfiles = useMemo(() => [...getContactLinks(), ...getCodingProfiles()], []);

    return (
        <ul className={`hidden lg:flex ${styles.contact3D} absolute top-[80%] md:top-[74%] lg:top-[calc(50%+150px)] right-32.5`}>
            {externalProfiles.map((externalProfile) => (
                <li key={externalProfile.platform}>
                    <a href={externalProfile.url} {...getExternalProfileProps(externalProfile.platform)}>
                        <IconWrapper name={externalProfile.icon} className="w-12 h-12" />
                    </a>
                </li>
            ))}
        </ul>
    );
}
