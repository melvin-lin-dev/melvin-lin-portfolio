import { type ReactElement } from "react";

import ElevatedButton from "@/common/components/buttons/three-dimension-button/elevated-button/ElevatedButton";
import Animate from "@/components/framer-motion/Animate";
import { fadeUp, popIn } from "@/lib/utils/framer-motion/motions";
import { MousePointerClick, SquareMousePointer } from "lucide-react";
import Link from "next/link";
import SkillLegendContainer from "../../common/containers/SkillLegendContainer";
import AboutContainer from "./containers/about/AboutContainer";
import AchievementContainer from "./containers/achievement/AchievementContainer";
import EducationTimelineContainer from "./containers/education/TimelineContainer";
import EmailFormContainer from "./containers/external-profile/EmailFormContainer";
import ExternalProfileContainer from "./containers/external-profile/ExternalProfileContainer";
import HeroContainer from "./containers/hero/hero-container/HeroContainer";
import ProjectCarouselContainer from "./containers/project-highlight/ProjectCarouselContainer";
import QuoteContainer from "./containers/quote/QuoteContainer";
import SkillContainer from "./containers/skill/SkillContainer";
import WorkExperienceTimelineContainer from "./containers/work-experience/TimelineContainer";

const sectionIds = {
    workExperience: "work-experience-section",
    education: "education-section",
};

export default function HomePage(): ReactElement {
    return (
        <>
            <HeroContainer />
            <section className="py-16 md:py-20 lg:py-28">
                <div className="px-5 mb-8 flex items-center space-x-3 justify-center">
                    <Animate variants={popIn} className="py-1.5 px-4 bg-slate-100 text-gray-500 border border-gray-300 rounded-full flex items-center space-x-2 text-sm">
                        <SquareMousePointer className="w-5 h-5" />
                        <span>
                            <b>Hover</b> to pause
                        </span>
                        <span>•</span>
                        <MousePointerClick className="w-5 h-5" />
                        <span>
                            <b>Click</b> to next quote
                        </span>
                    </Animate>
                </div>
                <QuoteContainer />
            </section>
            <AboutContainer />
            <section>
                <div className="container max-w-5xl 2xl:max-w-7xl py-12 md:py-16 lg:py-20">
                    <Animate tag="h2" variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-600 uppercase tracking-wider">
                        Tech Stack
                    </Animate>
                    <SkillLegendContainer />
                    <SkillContainer />
                </div>
            </section>
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mb-8">
                    <Animate tag="h2" variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-600 uppercase tracking-wider">
                        Project Highlights
                    </Animate>
                </div>
                <div className="container min-[1700px]:max-w-[1600px] !px-1">
                    <ProjectCarouselContainer />
                </div>
            </section>
            <section id={sectionIds.workExperience} className="pt-12 md:pt-16 lg:pt-32 bg-slate-100">
                <div className="container">
                    <Animate tag="h2" variants={fadeUp} className="mb-8 md:mb-12 lg:mb-20 text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-center">
                        Work Experience
                    </Animate>
                    <WorkExperienceTimelineContainer sectionId={sectionIds.workExperience} />
                </div>
            </section>
            <section id={sectionIds.education} className="pb-12 md:pb-16 lg:pb-20 pt-28 md:pt-32 lg:pt-40 bg-linear-to-b from-slate-100 to-transparent">
                <div className="container">
                    <Animate tag="h2" variants={fadeUp} className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider">
                        Education
                    </Animate>
                    <EducationTimelineContainer sectionId={sectionIds.education} />
                </div>
            </section>
            <section className="pb-12 md:pb-16 lg:pb-20 text-center">
                <ElevatedButton asChild>
                    <Link href="/timeline" className="block py-4 px-7 text-sm sm:text-base md:text-lg font-semibold rounded-full">
                        View Complete Timeline
                    </Link>
                </ElevatedButton>
            </section>
            <AchievementContainer />
            <section className="py-16 md:py-20 lg:py-28 relative bg-[radial-gradient(closest-corner_at_65%_40%,_#CFFAFE,_transparent_50%),radial-gradient(closest-corner_at_35%_65%,_#CFFBE4,_transparent_85%)]">
                <div className="container">
                    <Animate tag="h2" variants={fadeUp} className="mb-10 md:mb-12 lg:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase tracking-wider">
                        Let&apos;s Connect
                    </Animate>
                    <ExternalProfileContainer />
                    <div className="mt-8 lg:mt-10 xl:mt-12 px-0 lg:px-12 xl:px-32 2xl:px-60">
                        <EmailFormContainer />
                    </div>
                </div>
            </section>
        </>
    );
}
