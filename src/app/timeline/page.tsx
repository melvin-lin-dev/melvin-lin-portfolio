import Text3D from "@/common/components/text-3d/Text3D";
import Animate from "@/components/framer-motion/Animate";
import { pageTitle } from "@/lib/shared/utils/metadata";
import { fadeUp } from "@/utils/framer-motion/motions";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import TimelineContainer from "./containers/timeline/TimelineContainer";

export const metadata: Metadata = {
    title: pageTitle("Timeline"),
};

export default function TimelinePage(): ReactElement {
    return (
        <>
            <section className="py-28 sm:py-32 md:py-40 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white">
                <div className="container min-[1700px]:max-w-[1600px] text-center space-y-5">
                    <Text3D tag="h1" className="text-4xl sm:text-5xl font-bold tracking-wider">
                        My Journey & Growth
                    </Text3D>
                    <Animate tag="p" variants={fadeUp} delay={0.25} className="text-xl sm:text-2xl font-semibold tracking-wide">
                        Work, Education, Competitions, Training, and Career Breaks
                    </Animate>
                </div>
            </section>
            <TimelineContainer />
        </>
    );
}
