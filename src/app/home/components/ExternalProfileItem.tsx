import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import type { ExternalProfile } from "@/lib/modules/external-profile/models/external-profile.model";
import type { ReactElement } from "react";

type ExternalProfileItemProps = {
    externalProfile: ExternalProfile;
};

export default function ExternalProfileItem({ externalProfile }: ExternalProfileItemProps): ReactElement {
    return (
        <a href={externalProfile.url} target="_blank" className="py-2 px-3 flex space-x-3 border border-transparent cursor-pointer transition hover:bg-slate-100 hover:text-cyan-600 rounded-lg">
            <IconWrapper name={externalProfile.icon} className="mt-0.5 w-6 h-6" />
            <div>
                <h3 className="text-xl font-medium">{externalProfile.platform}</h3>
                <p className="text-sm text-gray-700">{externalProfile.description ?? externalProfile.url}</p>
            </div>
        </a>
    );
}
