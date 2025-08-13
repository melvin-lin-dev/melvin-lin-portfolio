"use client";

import type { WorkExperience } from "@/lib/modules/work-experience/models/work-experience.model";
import { ChevronDownCircle } from "lucide-react";
import type { ReactElement } from "react";

interface WorkExperienceTimelineItemProps {
    workExperience: WorkExperience;
    isActive: boolean;
}

export default function WorkExperienceTimelineItem({ workExperience, isActive }: WorkExperienceTimelineItemProps): ReactElement {
    const style: Record<string, Record<string, string>> = {
        content: {
            position: "text-gray-500",
            location: "text-gray-500",
        },
    };

    if (isActive) {
        style.content = {
            position: "text-gray-100",
            location: "text-gray-100",
        };
    }

    const collapsableId = `work-experience-collapsible-${workExperience.id}`;

    return (
        <>
            <h3 className="sm:text-lg md:text-xl font-semibold">{workExperience.company}</h3>
            <p className={`!mt-0 italic !font-normal ${style.content.position}`}>{workExperience.position}</p>
            <p className={`!mt-1 ${style.content.location}`}>{workExperience.location}</p>
            <div className="relative mt-3">
                {workExperience.descriptions.length > 4 && (
                    <>
                        <input type="checkbox" id={collapsableId} className="checked:[&+label]:rotate-180 checked:[&~ul]:max-h-[300px]" hidden />
                        <label htmlFor={collapsableId} className={`absolute bottom-0 right-0 cursor-pointer transition-all ${isActive ? "hover:text-white/60" : "text-cyan-500 hover:text-cyan-700"}`}>
                            <ChevronDownCircle />
                        </label>
                    </>
                )}
                <ul className="pl-5 list-disc space-y-0.5 max-h-[130px] overflow-hidden transition-all">
                    {workExperience.descriptions.map((description) => (
                        <li key={description} className="text-sm md:text-base">
                            {description}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
