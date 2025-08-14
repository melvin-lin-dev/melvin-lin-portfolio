import "@xyflow/react/dist/style.css";
import { type ReactElement } from "react";

import { MousePointerClick, SquareMousePointer } from "lucide-react";
import "react-responsive-3d-carousel/dist/styles.css";
import SkillLegendContainer from "../../common/containers/SkillLegendContainer";
import AboutContainer from "./containers/about/AboutContainer";
import EducationTimelineContainer from "./containers/education/TimelineContainer";
import EmailFormContainer from "./containers/external-profile/EmailFormContainer";
import ExternalProfileContainer from "./containers/external-profile/ExternalProfileContainer";
import HeroContainer from "./containers/hero/hero-container/HeroContainer";
import ProjectCarouselContainer from "./containers/project-highlight/ProjectCarouselContainer";
import QuoteContainer from "./containers/quote/QuoteContainer";
import SkillContainer from "./containers/skill/SkillContainer";
import WorkExperienceTimelineContainer from "./containers/work-experience/TimelineContainer";

export default function HomePage(): ReactElement {
    return (
        <>
            <HeroContainer />
            <section id="quote-section" className="py-16 md:py-20 lg:py-28">
                <div className="px-5 mb-8 flex items-center space-x-3 justify-center">
                    <div className="py-1.5 px-4 bg-slate-100 text-gray-500 border border-gray-300 rounded-full flex items-center space-x-2 text-sm">
                        <SquareMousePointer className="w-5 h-5" />
                        <span>
                            <b>Hover</b> to pause
                        </span>
                        <span>•</span>
                        <MousePointerClick className="w-5 h-5" />
                        <span>
                            <b>Click</b> to next quote
                        </span>
                    </div>
                </div>
                <QuoteContainer />
            </section>
            <AboutContainer />
            <section>
                <div className="container max-w-5xl 2xl:max-w-7xl py-12 md:py-16 lg:py-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-emerald-600 uppercase tracking-wider">Tech Stack</h2>
                    <SkillLegendContainer />
                    <SkillContainer />
                </div>
            </section>
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container">
                    <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 uppercase tracking-wider">Project Highlights</h2>
                    <ProjectCarouselContainer></ProjectCarouselContainer>
                </div>
            </section>
            <section className="pt-12 md:pt-16 lg:pt-32 bg-slate-100">
                <div className="container">
                    <h2 className="mb-8 md:mb-12 lg:mb-20 text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-center">Work Experience</h2>
                    <WorkExperienceTimelineContainer></WorkExperienceTimelineContainer>
                </div>
            </section>
            <section className="pt-28 md:pt-32 lg:pt-40 bg-linear-to-b from-slate-100 to-transparent">
                <div className="container">
                    <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider">Education</h2>
                    <EducationTimelineContainer></EducationTimelineContainer>
                </div>
            </section>
            <section className="pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-28 relative bg-[radial-gradient(closest-corner_at_65%_40%,_#CFFAFE,_transparent_50%),radial-gradient(closest-corner_at_35%_65%,_#CFFBE4,_transparent_85%)]">
                <div className="container">
                    <h2 className="mb-10 md:mb-12 lg:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase tracking-wider">Let&apos;s Connect</h2>
                    <ExternalProfileContainer />
                    <div className="mt-8 lg:mt-10 xl:mt-12 px-0 lg:px-12 xl:px-32 2xl:px-60">
                        <EmailFormContainer />
                    </div>
                </div>
            </section>
        </>
    );
}
