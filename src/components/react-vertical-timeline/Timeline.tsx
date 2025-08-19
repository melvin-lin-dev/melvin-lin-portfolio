"use client";

import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";
import { StarIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IconWrapper } from "../icon/lucide/IconWrapper";
import { TimelineMeta } from "@/lib/modules/timeline/enums/timeline-category.enum";

type TimelineProps<T extends Timeline> = {
    data: T[];
    layout?: string;
    style?: Partial<Pick<ComponentProps<typeof VerticalTimelineElement>, "contentStyle" | "contentArrowStyle">>;

    children: (item: T, isActive: boolean) => React.ReactNode;
};

export default function Timeline<T extends Timeline>({ data, layout, style = {}, children }: TimelineProps<T>) {
    return (
        <VerticalTimeline lineColor="#06b6d4" layout={layout}>
            {data.map((entry, i) => {
                const entryMeta = TimelineMeta[entry.category];
                
                const defaultStyle: Pick<ComponentProps<typeof VerticalTimelineElement>, "dateClassName" | "iconStyle" | "contentStyle" | "contentArrowStyle"> = {
                    dateClassName: ["!pb-0", "!float-right", "xl:text-gray-700"],
                    iconStyle: entryMeta.style?.icon || {},
                    contentStyle: { ...style.contentStyle },
                    contentArrowStyle: { ...style.contentArrowStyle },
                };

                const isActive = entry.endDate == "Today";

                if (isActive) {
                    const activeBackgroundColor = "#06b6d4";

                    defaultStyle.dateClassName.push("!opacity-100");

                    defaultStyle.iconStyle = {
                        ...defaultStyle.iconStyle,
                        boxShadow: "0 0 0 4px #d1d5db,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
                    };

                    defaultStyle.contentStyle = {
                        ...defaultStyle.contentStyle,
                        background: activeBackgroundColor,
                        color: "#fff",
                    };

                    defaultStyle.contentArrowStyle = {
                        ...defaultStyle.contentArrowStyle,
                        borderRight: "7px solid " + activeBackgroundColor,
                    };
                }

                return (
                    <VerticalTimelineElement
                        key={i}
                        date={`${entry.startDate} - ${entry.endDate}`}
                        dateClassName={defaultStyle.dateClassName.join(" ")}
                        icon={<IconWrapper name={entryMeta.icon} />}
                        iconStyle={defaultStyle.iconStyle}
                        contentStyle={defaultStyle.contentStyle}
                        contentArrowStyle={defaultStyle.contentArrowStyle}
                    >
                        {children(entry, isActive)}
                    </VerticalTimelineElement>
                );
            })}
            <VerticalTimelineElement iconStyle={{ background: "#00BC7D", color: "#fff" }} icon={<StarIcon />} />
        </VerticalTimeline>
    );
}
