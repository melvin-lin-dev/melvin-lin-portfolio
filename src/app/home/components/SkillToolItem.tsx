import type { SkillTool } from "@/lib/modules/skill/models/skill-tool.model";
import Image from "next/image";
import type { ReactElement } from "react";

type SkillToolItemProps = {
    skillTool: SkillTool;
};

export default function SkillToolItem({ skillTool }: SkillToolItemProps): ReactElement {
    return (
        <div className="relative top-0 rounded-lg p-4 bg-slate-100 text-white shadow-gray-300 group transition-all hover:-top-2 hover:shadow-lg">
            <div className="relative w-10 h-10 mx-auto transition group-hover:scale-[1.2]">
                <Image src={`/images/tools/${skillTool.image}`} alt={`${skillTool.name} Logo`} className="object-contain" fill />
            </div>
            <h4 className="mt-2 text-lg font-semibold text-gray-700 text-center">{skillTool.name}</h4>
        </div>
    );
}
