import Animate from "@/components/framer-motion/Animate";
import { getCodingProfiles, getContactLinks } from "@/lib/modules/external-profile/services/external-profile.service";
import { fadeUp, shrinkFadeIn } from "@/utils/framer-motion/motions";
import { useMemo, type ReactElement } from "react";
import ContactContainer from "./ContactContainer";

export default function ExternalProfileContainer(): ReactElement {
    const contactLinks = useMemo(() => getContactLinks(), []);
    const codingProfiles = useMemo(() => getCodingProfiles(), []);

    return (
        <div className="px-0 lg:px-12 xl:px-32 2xl:px-60 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-8">
            <Animate variants={shrinkFadeIn} className="flex-1 py-4 px-4 bg-white rounded-xl shadow-[0_4px_10px_#ccc] lg:shadow-[0_4px_15px_1px_#ccc]">
                <Animate tag="h3" variants={fadeUp} delay={0.25} className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold text-center">
                    Contacts
                </Animate>
                <ContactContainer externalProfiles={contactLinks} motionDelay={0.3} />
            </Animate>
            <Animate variants={shrinkFadeIn} delay={0.3} className="flex-1 py-4 px-4 bg-white rounded-xl shadow-[0_4px_10px_#ccc] lg:shadow-[0_4px_15px_1px_#ccc]">
                <Animate tag="h3" variants={fadeUp} delay={0.55} className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold text-center">
                    Coding Profiles
                </Animate>
                <ContactContainer externalProfiles={codingProfiles} motionDelay={0.6} />
            </Animate>
        </div>
    );
}
