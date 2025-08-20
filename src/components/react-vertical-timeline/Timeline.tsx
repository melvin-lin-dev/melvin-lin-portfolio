"use client";

import { timelineColorMeta, timelineMeta } from "@/lib/modules/timeline/enums/timeline-category.enum";
import type { Timeline } from "@/lib/modules/timeline/models/timeline.model";
import { formatDate, formatMonthYear, isDateStringComplete } from "@/lib/shared/utils/date";
import { ChevronUp } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IconWrapper } from "../icon/lucide/IconWrapper";

type TimelineProps<T extends Timeline> = {
    data: T[];
    layout?: string;
    scrollToId?: string;
    style?: Partial<Pick<ComponentProps<typeof VerticalTimelineElement>, "contentStyle" | "contentArrowStyle">>;

    children: (item: T, isActive: boolean) => ReactNode;
};

export default function Timeline<T extends Timeline>({ data, layout, scrollToId, style = {}, children }: TimelineProps<T>) {
    const handleScrollToId = () => {
        const element = document.getElementById(scrollToId!);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <VerticalTimeline lineColor="#06b6d4" layout={layout}>
            {data.map((entry, i) => {
                const entryMeta = timelineMeta[entry.category];
                const entryColorMeta = timelineColorMeta[entry.category];

                const defaultStyle: Pick<ComponentProps<typeof VerticalTimelineElement>, "dateClassName" | "iconStyle" | "contentStyle" | "contentArrowStyle"> = {
                    dateClassName: ["!pb-0", "!float-right", "xl:text-gray-700"],
                    iconStyle: { backgroundColor: entryColorMeta.primary, color: entryColorMeta.secondary },
                    contentStyle: { ...style.contentStyle, borderTop: "4px solid " + entryColorMeta.primary },
                    contentArrowStyle: { ...style.contentArrowStyle },
                };

                const isActive = entry.endDate == "Present";

                if (isActive) {
                    const activeBackgroundColor = entryColorMeta.primary;

                    defaultStyle.dateClassName.push("!opacity-100");

                    defaultStyle.iconStyle = {
                        ...defaultStyle.iconStyle,
                        boxShadow: `0 0 0 4px ${activeBackgroundColor},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`
                    };

                    defaultStyle.contentStyle = {
                        ...defaultStyle.contentStyle,
                        backgroundColor: activeBackgroundColor,
                        color: "#fff",
                        borderTop: "none",
                    };

                    defaultStyle.contentArrowStyle = {
                        ...defaultStyle.contentArrowStyle,
                        borderRight: "7px solid " + activeBackgroundColor,
                    };
                }

                const startDate = isDateStringComplete(entry.startDate) ? formatDate(entry.startDate) : formatMonthYear(entry.startDate);
                const endDate = isDateStringComplete(entry.endDate) ? formatDate(entry.endDate) : formatMonthYear(entry.endDate);

                return (
                    <VerticalTimelineElement
                        key={i}
                        date={`${startDate} - ${endDate}`}
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
            {scrollToId && (
                <VerticalTimelineElement
                    iconClassName="bg-teal-500 text-white scale-100 cursor-pointer transition-[background-color,scale] hover:bg-teal-400 hover:scale-[1.15]"
                    icon={<ChevronUp />}
                    iconOnClick={handleScrollToId}
                />
            )}
        </VerticalTimeline>
    );
}
