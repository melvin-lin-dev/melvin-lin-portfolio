'use client';

import type { WorkExperience } from "@/lib/modules/work-experience/models/work-experience.model";
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

    return (
        <>
            <h3 className="sm:text-lg lg:text-xl font-semibold">{workExperience.company}</h3>
            <p className={`!mt-0 italic !font-normal ${style.content.position}`}>{workExperience.position}</p>
            <p className={`!mt-1 ${style.content.location}`}>{workExperience.location}</p>
            <div className="mt-3">
                {
                    <ul className="pl-5 list-disc space-y-0.5">
                        {workExperience.descriptions.map((description) => (
                            <li key={description} className="text-sm md:text-base">{description}</li>
                        ))}
                    </ul>
                }
            </div>
        </>
    );
}
