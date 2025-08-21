import type { ExternalProfile } from "@/lib/modules/external-profile/models/external-profile.model";
import type { ReactElement } from "react";
import ExternalProfileItem from "../../components/ExternalProfileItem";
import Animate from "@/components/framer-motion/Animate";
import AnimateChild from "@/components/framer-motion/AnimateChild";
import { fadeUpScale } from "@/utils/framer-motion/motions";

type ContactContainerProps = {
    externalProfiles: ExternalProfile[];
    motionDelay?: number;
};

export default function ContactContainer({ externalProfiles, motionDelay = 0 }: ContactContainerProps): ReactElement {
    return (
        <Animate tag="ul" delay={motionDelay} delayChildren={motionDelay} staggerChildren={0.25} className="space-y-0.5">
            {externalProfiles.map((externalProfile) => (
                <AnimateChild tag="li" variants={fadeUpScale} key={externalProfile.platform}>
                    <ExternalProfileItem externalProfile={externalProfile} />
                </AnimateChild>
            ))}
        </Animate>
    );
}
