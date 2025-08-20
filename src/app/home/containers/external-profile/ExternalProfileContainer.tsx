import { getCodingProfiles, getContactLinks } from "@/lib/modules/external-profile/services/external-profile.service";
import { useMemo, type ReactElement } from "react";
import ContactContainer from "./ContactContainer";

export default function ExternalProfileContainer(): ReactElement {
    const contactLinks = useMemo(() => getContactLinks(), []);
    const codingProfiles = useMemo(() => getCodingProfiles(), []);

    return (
        <div className="px-0 lg:px-12 xl:px-32 2xl:px-60 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-8">
            <div className="flex-1 py-4 px-4 bg-white rounded-xl shadow-[0_4px_10px_#ccc] lg:shadow-[0_4px_15px_1px_#ccc]">
                <h3 className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold text-center">Contacts</h3>
                <ul className="space-y-0.5">
                    <ContactContainer externalProfiles={contactLinks} />
                </ul>
            </div>
            <div className="flex-1 py-4 px-4 bg-white rounded-xl shadow-[0_4px_10px_#ccc] lg:shadow-[0_4px_15px_1px_#ccc]">
                <h3 className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold text-center">Coding Profiles</h3>
                <ul className="space-y-0.5">
                    <ContactContainer externalProfiles={codingProfiles} />
                </ul>
            </div>
        </div>
    );
}
