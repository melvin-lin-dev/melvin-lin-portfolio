import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import type { ExternalProfile } from "@/lib/modules/external-profile/models/external-profile.model";
import type { ReactElement } from "react";

type ExternalProfileItemProps = {
    externalProfile: ExternalProfile;
};

export default function ExternalProfileItem({ externalProfile }: ExternalProfileItemProps): ReactElement {
    return (
        <a href={externalProfile.url} target="_blank" className="block bg-amber-500 rounded-lg cursor-pointer group">
            <div className="relative left-0 py-2 px-3 flex space-x-3 bg-white border-amber-500 transition-[left,background-color,color] group-hover:left-1 group-hover:bg-slate-100 group-hover:text-cyan-600 rounded-lg">
                <IconWrapper name={externalProfile.icon} className="mt-0.5 w-6 h-6" />
                <div>
                    <h3 className="sm:text-lg lg:text-xl font-medium">{externalProfile.platform}</h3>
                    <p className="text-sm text-gray-700">{externalProfile.description ?? externalProfile.url}</p>
                </div>
            </div>
        </a>
    );
}
