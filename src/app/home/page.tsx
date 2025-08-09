"use client";

import "@xyflow/react/dist/style.css";
import { type ReactElement } from "react";

import "react-responsive-3d-carousel/dist/styles.css";
import SkillLegendContainer from "../../common/containers/SkillLegendContainer";
import AboutContainer from "./containers/about/AboutContainer";
import ExternalProfileContainer from "./containers/external-profile/ExternalProfileContainer";
import HeroContainer from "./containers/hero/HeroContainer";
import ProjectCarousel from "./containers/project-highlight/ProjectCarousel";
import QuoteContainer from "./containers/quote/QuoteContainer";
import SkillContainer from "./containers/skill/SkillContainer";
import WorkExperienceTimelineContainer from "./containers/work-experience/TimelineContainer";
import EducationTimelineContainer from "./containers/education/TimelineContainer";

export default function HomePage(): ReactElement {
    return (
        <>
            <HeroContainer />
            <QuoteContainer />
            <AboutContainer />
            <section>
                <div className="container py-20">
                    <h2 className="text-4xl font-bold text-center text-emerald-600 uppercase tracking-wider">Tech Stack</h2>
                    <SkillLegendContainer />
                    <SkillContainer />
                </div>
            </section>
            <section className="py-20">
                <div className="container">
                    <h2 className="mb-8 text-4xl font-bold text-emerald-600 uppercase tracking-wider">Project Highlights</h2>
                    <div>
                        <ProjectCarousel></ProjectCarousel>
                    </div>
                </div>
            </section>
            <section className="pt-20 bg-slate-100">
                <div className="container">
                    <h2 className="mb-8 text-4xl font-bold uppercase tracking-wider">Work Experience</h2>
                    <WorkExperienceTimelineContainer></WorkExperienceTimelineContainer>
                </div>
            </section>
            <section className="pt-40 bg-linear-to-b from-slate-100 to-transparent">
                <div className="container">
                    <h2 className="mb-8 text-4xl font-bold uppercase tracking-wider">Education</h2>
                    <EducationTimelineContainer></EducationTimelineContainer>
                </div>
            </section>
            <section className="pt-40 pb-28 relative bg-[radial-gradient(closest-corner_at_50%_60%,_#CFFBE4,_white)]">
                <div className="container">
                    <h2 className="mb-8 text-4xl font-bold text-center uppercase tracking-wider">Let&apos;s Connect</h2>
                    <ExternalProfileContainer />
                </div>
            </section>
        </>
    );
}
