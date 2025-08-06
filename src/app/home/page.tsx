"use client";

import { Edge, Node, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { ReactElement } from "react";

import { FaDownload, FaLocationPin } from "react-icons/fa6";

import FloatingEdge from "@/components/react-flow/edges/FloatingEdge";
import WindRoseChartClient from "@/components/react-plotly/WindRoseChartClient";
import Timeline from "@/components/react-vertical-timeline/Timeline";

import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import AboutNode from "@/components/react-flow/nodes/AboutNode";
import { getEducations } from "@/lib/modules/education/services/education.service";
import { getCodingProfiles, getContactLinks } from "@/lib/modules/external-profile/services/external-profile.service";
import { getProjects } from "@/lib/modules/project/services/project.service";
import { getSkill } from "@/lib/modules/skill/services/skill.service";
import { getWorkExperiences } from "@/lib/modules/work-experience/services/work-experience.service";
import { buildThresholdLayers } from "@/lib/utils/react-plotly/wind-rose.utils";
import Image from "next/image";
import EducationTimelineItem from "./components/EducationTimelineItem";
import WorkExperienceTimelineItem from "./components/WorkExperienceTimelineItem";
import styles from "./home.module.scss";

const nodes: Node[] = [
    // Row 1
    {
        id: "about",
        type: "about",
        position: { x: 700, y: 0 },
        data: {
            icon: "user",
            label: "About Me",
            description: "Software Engineer passionate about AI integrations",
        },
    },

    // Row 2
    {
        id: "background",
        type: "about",
        position: { x: 300, y: 160 },
        data: {
            icon: "school",
            label: "Background",
            description: "College in BINUS • National-level web tech competition",
        },
    },
    {
        id: "work_status",
        type: "about",
        position: { x: 1100, y: 160 },
        data: {
            icon: "briefcase",
            label: "Work Status",
            description: "Open to onsite work • Willing to relocate",
        },
    },

    // Row 3
    {
        id: "skills",
        type: "about",
        position: { x: 100, y: 340 },
        data: {
            icon: "wrench",
            label: "Strongest Skills",
            description: "Vue, Angular, Laravel • Open to improve other skills",
        },
    },
    {
        id: "traits",
        type: "about",
        position: { x: 500, y: 340 },
        data: {
            icon: "puzzle",
            label: "Values & Traits",
            description: "Detail-oriented, introspective • Working on soft skills",
        },
    },
    {
        id: "recent_work",
        type: "about",
        position: { x: 900, y: 340 },
        data: {
            icon: "folder",
            label: "Recent Work",
            description: "Portfolio rebuild • SPA/state management in vanilla JS",
        },
    },
    {
        id: "working_on",
        type: "about",
        position: { x: 1300, y: 340 },
        data: {
            icon: "code",
            label: "Currently Working On",
            description: "Rebuilding AI face recognition app • Portfolio",
        },
    },

    // Row 4
    {
        id: "learning",
        type: "about",
        position: { x: 700, y: 520 },
        data: {
            icon: "book",
            label: "Learning",
            description: "React/Next clean code • Competitive programming • Chinese • Psychology & self-discipline",
        },
    },

    // Row 5
    {
        id: "goal",
        type: "about",
        position: { x: 700, y: 730 },
        data: {
            icon: "target",
            label: "Goal",
            description: "Build solid work experience • Work overseas",
        },
    },
];

const edges: Edge[] = [
    { id: "e_about_background", source: "about", target: "background" },
    { id: "e_about_work_status", source: "about", target: "work_status" },

    { id: "e_background_skills", source: "background", target: "skills" },
    { id: "e_background_traits", source: "background", target: "traits" },

    { id: "e_work_status_recent_work", source: "work_status", target: "recent_work" },
    { id: "e_work_status_working_on", source: "work_status", target: "working_on" },

    { id: "e_skills_learning", source: "skills", target: "learning" },
    { id: "e_traits_learning", source: "traits", target: "learning" },
    { id: "e_recent_work_learning", source: "recent_work", target: "learning" },
    { id: "e_working_on_learning", source: "working_on", target: "learning" },

    { id: "e_learning_goal", source: "learning", target: "goal" },
];

const edgeTypes = {
    floating: FloatingEdge,
};

const thresholds = [
    {
        max: 2,
        color: "rgba(86, 156, 214, 0.7)",
        label: "Beginner",
    },
    {
        max: 4,
        color: "rgba(104, 204, 255, 0.7)",
        label: "Novice",
    },
    {
        max: 6,
        color: "rgba(255, 206, 86, 0.75)",
        label: "Intermediate",
    },
    {
        max: 8,
        color: "rgba(255, 144, 104, 0.8)",
        label: "Advanced",
    },
    {
        max: 10,
        color: "rgba(108, 255, 181, 0.85)",
        label: "Expert",
    },
];

const contactLinks = getContactLinks();
const codingProfiles = getCodingProfiles();
const skill = getSkill();
const projects = getProjects();
const workExperiences = getWorkExperiences();
const educations = getEducations();

const skillLanguages = buildThresholdLayers(thresholds, skill.languages);
const skillFrameworks = buildThresholdLayers(thresholds, skill.frameworks);

const getExternalProfileProps = (platform: string) =>
  platform === 'Email' ? {} : { target: "_blank", rel: "noopener noreferrer" };

export default function HomePage(): ReactElement {
    return (
        <>
            <section className={`${styles.heroSection} h-[80vh] bg-gradient-to-r from-emerald-400 to-cyan-400 text-white`}>
                <div className="container h-full py-20 flex">
                    <div className="self-center">
                        <div className={`${styles.cube3d} ${styles.rotateY}`}>
                            <div className={`${styles.cube}`}>
                                <div className={`${styles.front}`}>
                                    <div>
                                        <Image src="/images/angular.webp" alt="Angular Logo" className="object-contain" fill />
                                    </div>
                                </div>
                                <div className={`${styles.back}`}>
                                    <div>
                                        <Image src="/images/react.webp" alt="React Logo" className="object-contain" fill />
                                    </div>
                                </div>
                                <div className={`${styles.right}`}>
                                    <div>
                                        <Image src="/images/vue.webp" alt="Vue Logo" className="object-contain" fill />
                                    </div>
                                </div>
                                <div className={`${styles.left}`}>
                                    <div>
                                        <Image src="/images/laravel.png" alt="Laravel Logo" className="object-contain" fill />
                                    </div>
                                </div>
                                <div className={`${styles.top}`}>
                                    <div>
                                        <Image src="/images/python.webp" alt="Python Logo" className="object-contain" fill />
                                    </div>
                                </div>
                                <div className={`${styles.bottom}`}>
                                    <div>
                                        <Image src="/images/flutter.webp" alt="Flutter Logo" className="object-contain" fill />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-8 space-y-4">
                                <h1 className="text-7xl font-bold tracking-wide">Melvin Lin</h1>
                                <p className="text-4xl">Problem Solver...</p>
                            </div>
                            <div className="mt-6 space-y-3 text-xl">
                                <div className="flex items-center space-x-3">
                                    <FaLocationPin />
                                    <p>Indonesia (Willing to Relocate Overseas)</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="w-5 h-5 bg-green-300 rounded-full border border-white" aria-label="Available"></span>
                                    <p>Available Immediately</p>
                                </div>
                            </div>
                            <div className="mt-12 flex space-x-4">
                                <button type="button" className="btn btn-secondary py-6 px-8 rounded-full text-xl">
                                    Discover More
                                </button>
                                <a href="" download title="Resume" className="py-6 btn btn-white rounded-full text-xl">
                                    <FaDownload />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.contact3d} flex-1 flex items-center justify-center`}>
                        <ul>
                            {[...contactLinks, ...codingProfiles].map((externalProfile) => (
                                <li key={externalProfile.platform}>
                                    <a href={externalProfile.url} {...getExternalProfileProps(externalProfile.platform)}>
                                        <IconWrapper name={externalProfile.icon} className="w-8 h-8" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="relative floating-edges h-[1000px] border">
                    <ReactFlow
                        fitView
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={{ about: AboutNode }}
                        edgeTypes={edgeTypes}
                        defaultEdgeOptions={{
                            type: "floating",
                        }}
                        zoomOnScroll={false}
                        zoomOnPinch={false}
                        zoomOnDoubleClick={false}
                        panOnScroll={false}
                        panOnDrag={false}
                        panOnScrollSpeed={0}
                        nodesDraggable={false}
                    ></ReactFlow>
                    <div className="absolute top-0 left-0 w-full h-full"></div>
                </div>
            </section>
            <section>
                <div className="container py-20">
                    <h2 className="text-3xl font-bold text-center">Skills</h2>
                    <div className="mt-8 flex justify-center">
                        <ul className="mx-auto py-3 px-4 flex items-center space-x-4 bg-gray-100 rounded-lg">
                            {thresholds.map((threshold) => (
                                <li key={threshold.color} className="flex items-center space-x-2">
                                    <div className="w-3 h-3 border border-white" style={{ backgroundColor: threshold.color }} aria-hidden="true"></div>
                                    <span className="text-sm">{threshold.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6">
                        <div className="grid grid-cols-2">
                            <div>
                                <h3 className="mb-5 text-xl font-semibold text-center text-gray-700">Core Technologies</h3>
                                <WindRoseChartClient
                                    data={skillLanguages}
                                    layout={{
                                        dragmode: false,
                                        margin: { t: 0, b: 0 },
                                        width: 500,
                                        height: 400,
                                        // autosize: true,
                                        polar: {
                                            radialaxis: {
                                                visible: true,
                                                fixedrange: true,
                                                range: [0, 10],
                                            },
                                            angularaxis: { fixedrange: true },
                                        },
                                        showlegend: false,
                                    }}
                                    config={{
                                        displayModeBar: false,
                                        staticPlot: true,
                                        scrollZoom: false,
                                    }}
                                />
                            </div>
                            <div>
                                <h3 className="mb-5 text-xl font-semibold text-center text-gray-700">Frameworks</h3>
                                <WindRoseChartClient
                                    data={skillFrameworks}
                                    layout={{
                                        dragmode: false,
                                        margin: { t: 0, b: 0 },
                                        width: 500,
                                        height: 400,
                                        polar: {
                                            radialaxis: {
                                                visible: true,
                                                fixedrange: true,
                                                range: [0, 10],
                                            },
                                            angularaxis: { fixedrange: true },
                                        },
                                        showlegend: false,
                                    }}
                                    config={{
                                        displayModeBar: false,
                                        staticPlot: true,
                                        scrollZoom: false,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-center text-gray-700">Tools</h3>
                            <div className="mt-5 flex space-x-4">
                                {skill.tools.map((tool) => (
                                    <div key={tool.name} className="relative top-0 flex-1 rounded-lg p-4 bg-gray-100 text-white shadow-gray-300 group transition-all hover:-top-2 hover:shadow-lg">
                                        <div className="relative w-10 h-10 mx-auto transition group-hover:scale-[1.2]">
                                            <Image src={`/images/tools/${tool.image}`} alt={`${tool.name} Logo`} className="object-contain" fill />
                                        </div>
                                        <h4 className="mt-2 text-lg font-semibold text-gray-700 text-center">{tool.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl mb-8">Project Highlight</h2>
                    <div className="image-perspective grid grid-cols-4 gap-x-3 gap-y-3">
                        {projects.map((project) => (
                            <div key={project.id} className="w-full relative rounded-lg overflow-hidden group">
                                <Image src={`/images/${project.thumbnail}`} alt={`${project.title} Thumbnail`} fill />
                                <div className="relative p-4 w-full h-full bg-black/50 text-white transition opacity-0 group-hover:opacity-100">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="mt-1.5">{project.description}</p>
                                    <div className="mt-3 space-x-2">
                                        <a href="" className="btn btn-secondary px-2">
                                            Repository
                                        </a>
                                        <button type="button" className="btn btn-white px-2">
                                            Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-[#f9fafb]">
                <div className="container">
                    <h2 className="text-3xl mb-8">Work Experience</h2>
                    <Timeline data={workExperiences} style={{ contentStyle: { borderRadius: "8px" } }} layout="1-column-left">
                        {(item, isActive) => <WorkExperienceTimelineItem workExperience={item} isActive={isActive} />}
                    </Timeline>
                </div>
            </section>
            <section className="pt-20 bg-gray-150">
                <div className="container">
                    <h2 className="text-3xl mb-8">Education</h2>
                    <Timeline data={educations} style={{ contentStyle: { borderRadius: "8px", boxShadow: "0 2px 10px 0 #ccc" }, contentArrowStyle: { display: "none" } }}>
                        {(item, isActive) => <EducationTimelineItem education={item} isActive={isActive} />}
                    </Timeline>
                </div>
            </section>
            <section className="pt-40 pb-20 bg-linear-to-t from-blue-200 to-transparent relative">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>

                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <ul className="space-y-3">
                                {contactLinks.map((externalProfile) => (
                                    <li key={externalProfile.platform}>
                                        <a
                                            href={externalProfile.url}
                                            target="_blank"
                                            className="py-2 px-3 flex space-x-3 border border-transparent cursor-pointer transition hover:bg-white/60 hover:text-blue-700 rounded-lg"
                                        >
                                            <IconWrapper name={externalProfile.icon} className="mt-0.5 w-6 h-6" />
                                            <div>
                                                <h3 className="text-xl font-semibold">{externalProfile.platform}</h3>
                                                <p className="text-sm text-gray-700">{externalProfile.description ?? externalProfile.url}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-3">
                                {codingProfiles.map((externalProfile) => (
                                    <li key={externalProfile.platform}>
                                        <a
                                            href={externalProfile.url}
                                            className="py-2 px-3 flex space-x-3 border border-transparent cursor-pointer transition hover:bg-white/60 hover:text-blue-700 rounded-lg"
                                            {...getExternalProfileProps(externalProfile.platform)}
                                        >
                                            <IconWrapper name={externalProfile.icon} className="mt-0.5 w-6 h-6" />
                                            <div>
                                                <h3 className="text-xl font-semibold">{externalProfile.platform}</h3>
                                                <p className="text-sm text-gray-700">{externalProfile.description ?? externalProfile.url}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
