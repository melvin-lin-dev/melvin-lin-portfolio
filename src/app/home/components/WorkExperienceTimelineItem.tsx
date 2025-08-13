"use client";

import type { WorkExperience } from "@/lib/modules/work-experience/models/work-experience.model";
import STACK_COLORS from "@/lib/shared/constants/stack-colors";
import type { Stack } from "@/lib/shared/types/stack";
import { ChevronDown } from "lucide-react";
import { useState, type ReactElement } from "react";

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
    const showDetail = workExperience.descriptions.length > 4;

    return (
        <>
            <h3 className="sm:text-lg md:text-xl font-semibold">{workExperience.company}</h3>
            <p className={`!mt-0 italic !font-normal ${style.content.position}`}>{workExperience.position}</p>
            <p className={`!mt-1 ${style.content.location}`}>{workExperience.location}</p>
            <div className={`relative mt-3 ${showDetail ? "pb-7" : ""}`}>
                {showDetail && (
                    <>
                        <input type="checkbox" id={collapsableId} className="checked:[&+label_.icon]:rotate-180 checked:[&~ul]:max-h-[300px] checked:[&~ul]:after:h-0" hidden />
                        <label
                            htmlFor={collapsableId}
                            className={`absolute bottom-0 right-0 z-10 flex items-end space-x-1 cursor-pointer transition-all ${isActive ? "hover:text-white/60" : "text-cyan-500 hover:text-cyan-700"}`}
                        >
                            <span className="text-sm sm:text-base">Show More</span>
                            <ChevronDown className="icon w-4 h-4 sm:w-5 sm:h-5" />
                        </label>
                    </>
                )}
                <ul
                    className={`pl-5 list-disc space-y-0.5 max-h-[130px] overflow-hidden transition-all after:transition-all after:absolute after:bottom-0 after:left-0 after:w-full ${
                        showDetail ? "after:h-28" : "after:h-0"
                    } after:bg-gradient-to-t ${isActive ? "after:from-[#06b6d4]" : "after:from-white"} after:to-transparent`}
                >
                    {workExperience.descriptions.map((description) => (
                        <li key={description} className="text-sm md:text-base">
                            {description}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-3">
                <ul className="-ml-2 -mt-2 flex flex-wrap items-center">
                    {Object.entries(workExperience.stacks).map(([stack, values]) => (
                        <>
                            {values.map((value) => (
                                <li key={value} className="pl-2 pt-2">
                                    <span
                                        className={`py-0.5 px-2 text-xs font-medium rounded-full`}
                                        style={{
                                            color: isActive ? STACK_COLORS[stack as Stack] : "white",
                                            backgroundColor: isActive ? "white" : STACK_COLORS[stack as Stack],
                                        }}
                                    >
                                        {value}
                                    </span>
                                </li>
                            ))}
                        </>
                    ))}
                </ul>
            </div>
        </>
    );
}
