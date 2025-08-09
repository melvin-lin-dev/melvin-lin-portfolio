"use client";

import type { Edge, Node } from "@xyflow/react";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";

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
import { Carousel } from "react-responsive-3d-carousel";
import { TypeAnimation } from "react-type-animation";
import EducationTimelineItem from "./components/EducationTimelineItem";
import WorkExperienceTimelineItem from "./components/WorkExperienceTimelineItem";
import styles from "./home.module.scss";

import type { Education } from "@/lib/modules/education/models/education.model";
import type { AboutNodeData } from "@/types/react-flow/about-node-data";
import { Quote } from "lucide-react";
import "react-responsive-3d-carousel/dist/styles.css";

const edges: Edge[] = [
    { id: "e_about_background", source: "about", target: "background", style: { strokeWidth: 5 }, animated: true },
    { id: "e_about_work_status", source: "about", target: "work_status", style: { strokeWidth: 5 }, animated: true },

    { id: "e_background_skills", source: "background", target: "skills", style: { strokeWidth: 5 }, animated: true },
    { id: "e_background_traits", source: "background", target: "traits", style: { strokeWidth: 5 }, animated: true },

    { id: "e_work_status_recent_work", source: "work_status", target: "recent_work", style: { strokeWidth: 5 }, animated: true },
    { id: "e_work_status_working_on", source: "work_status", target: "working_on", style: { strokeWidth: 5 }, animated: true },

    { id: "e_skills_learning", source: "skills", target: "learning", style: { strokeWidth: 5 }, animated: true },
    { id: "e_traits_learning", source: "traits", target: "learning", style: { strokeWidth: 5 }, animated: true },
    { id: "e_recent_work_learning", source: "recent_work", target: "learning", style: { strokeWidth: 5 }, animated: true },
    { id: "e_working_on_learning", source: "working_on", target: "learning", style: { strokeWidth: 5 }, animated: true },

    { id: "e_learning_goal", source: "learning", target: "goal", style: { strokeWidth: 5 }, animated: true },
];

const edgeTypes = {
    floating: FloatingEdge,
};

const thresholds = [
    {
        max: 2,
        color: "rgba(204, 251, 241, 0.8)", // teal-100
        label: "Beginner",
    },
    {
        max: 4,
        color: "rgba(153, 246, 228, 0.8)", // teal-200
        label: "Novice",
    },
    {
        max: 6,
        color: "rgba(94, 234, 212, 0.8)", // teal-300
        label: "Intermediate",
    },
    {
        max: 8,
        color: "rgba(103, 232, 249, 0.8)", // cyan-300
        label: "Advanced",
    },
    {
        max: 10,
        color: "rgba(34, 211, 238, 0.8)", // cyan-400
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

const getExternalProfileProps = (platform: string) => (platform === "Email" ? {} : { target: "_blank", rel: "noopener noreferrer" });

const quotes = [
    {
        text: "No matter how messed up things get, you can always figure out the best solution.",
        by: "Eren Yeager",
        why: "Reminds me that no matter how tangled things get, there's always a solution if I keep trying.",
        time: 11000,
    },
    {
        text: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",
        by: "Naruto Uzumaki",
        why: "Encourages me to take control of my future despite doubt and fear.",
        time: 13000,
    },
    {
        text: "If you begin to regret, you'll dull your future decisions and let others make your choices for you. Nobody can foretell the outcome, therefore each decision you make holds meaning only by affecting your next decision.",
        by: "Erwin Smith",
        why: "Helps me stop overthinking and own my decisions without regret.",
        time: 17000,
    },
    {
        text: "Stay hungry, stay foolish.",
        by: "Steve Jobs",
        why: "Reminds me to stay curious and keep growing without fear.",
        time: 7500,
    },
];

export default function HomePage(): ReactElement {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const applyCenterGradient = (el: HTMLDivElement) => {
        el.style.backgroundImage = "radial-gradient(circle at center, #00D492 25%, #00D3F2 65%)";
        el.style.backgroundSize = "175% 175%";
    };

    const applyMouseGradient = (el: HTMLDivElement, x: number, y: number) => {
        el.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, #00D492 25%, #00D3F2 50%)`;
        el.style.backgroundSize = `100% 100%`;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        applyCenterGradient(e.currentTarget);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        applyMouseGradient(el, x, y);
    };

    useEffect(() => {
        if (sectionRef.current) {
            applyCenterGradient(sectionRef.current);
        }
    }, []);

    const titleGroups = [
        { text: "Software Engineer", category: "role" },
        { text: "Full Stack Developer", category: "role" },
        { text: "Frontend Engineer", category: "role" },
        { text: "Backend Engineer", category: "role" },
        { text: "Web Developer", category: "role" },

        { text: "Problem Solver", category: "mindset" },
        { text: "Lifelong Learner", category: "mindset" },
        { text: "Flow-based Thinker", category: "mindset" },
        { text: "Detail-Oriented Developer", category: "mindset" },
        { text: "Curious Developer", category: "mindset" },

        { text: "UI/UX Enthusiast", category: "design" },
        { text: "Design-Oriented Developer", category: "design" },
        { text: "Interactive UI Builder", category: "design" },

        { text: "Clean Code Advocate", category: "philosophy" },
    ];

    const colorMap: Record<string, string> = {
        role: "text-blue-600",
        mindset: "text-green-600",
        design: "text-pink-600",
        philosophy: "text-purple-600",
    };

    const [textColor, setTextColor] = useState("");

    const sequence = titleGroups.flatMap((item) => ["", () => setTextColor(colorMap[item.category]), item.text, 1500]);

    const parentRef = useRef<HTMLDivElement>(null);
    const effectRef = useRef<HTMLDivElement>(null);

    //     const handleParentMouseEnter = () => {
    //     setStatus("Status: mouse entered parent");
    //   };

    //   const handleParentMouseLeave = (e) => {
    //     // e.relatedTarget is the element mouse moved into
    //     if (
    //       overlapRef.current &&
    //       (e.relatedTarget === overlapRef.current || overlapRef.current.contains(e.relatedTarget))
    //     ) {
    //       setStatus("Status: moved into overlap (ignore mouseleave)");
    //       return;
    //     }
    //     setStatus("Status: mouse left parent");
    //   };

    //     const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if (
    //       overlapRef.current &&
    //       (e.relatedTarget === overlapRef.current || overlapRef.current.contains(e.relatedTarget))
    //     ) {
    //       setStatus("Status: moved into overlap (ignore mouseleave)");
    //       return;
    //     }
    //     setStatus("Status: mouse left parent");

    //         const el = e.currentTarget;
    //         const rect = el.getBoundingClientRect();
    //         const x = ((e.clientX - rect.left) / rect.width) * 100;
    //         const y = ((e.clientY - rect.top) / rect.height) * 100;
    //         effectRef.current!.style.left = x + "%";
    //         effectRef.current!.style.top = y + "%";
    //     };

    const nodes: Node<AboutNodeData>[] = [
        // Row 1
        {
            id: "about",
            type: "about",
            position: { x: 700, y: 0 },
            data: {
                icon: "user",
                label: "About Me",
                description: "Software Engineer passionate about AI integrations",
                mainEffectRef: effectRef,
                parentRef,
            },
        },

        // Row 2
        {
            id: "background",
            type: "about",
            position: { x: 300, y: 190 },
            data: {
                icon: "school",
                label: "Journey",
                description: "College in BINUS • National-level web tech competition",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
        {
            id: "work_status",
            type: "about",
            position: { x: 1100, y: 190 },
            data: {
                icon: "briefcase",
                label: "Current Status",
                description: "Open to onsite work • Willing to relocate",
                mainEffectRef: effectRef,
                parentRef,
            },
        },

        // Row 3
        {
            id: "skills",
            type: "about",
            position: { x: 100, y: 420 },
            data: {
                icon: "wrench",
                label: "Core Strengths",
                description: "Vue, Angular, Laravel • Open to improve other skills",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
        {
            id: "traits",
            type: "about",
            position: { x: 500, y: 380 },
            data: {
                icon: "puzzle",
                label: "Values & Traits",
                description: "Detail-oriented, introspective • Working on soft skills",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
        {
            id: "recent_work",
            type: "about",
            position: { x: 900, y: 380 },
            data: {
                icon: "folder",
                label: "Recent Work",
                description: "Portfolio rebuild • SPA/state management in vanilla JS",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
        {
            id: "working_on",
            type: "about",
            position: { x: 1300, y: 420 },
            data: {
                icon: "code",
                label: "Current Projects",
                description: "Rebuilding AI face recognition app • Portfolio",
                mainEffectRef: effectRef,
                parentRef,
            },
        },

        // Row 4
        {
            id: "learning",
            type: "about",
            position: { x: 700, y: 570 },
            data: {
                icon: "book",
                label: "Daily Learning",
                description: "React/Next clean code • Competitive programming • Chinese • Psychology & self-discipline",
                mainEffectRef: effectRef,
                parentRef,
            },
        },

        // Row 5
        {
            id: "goal",
            type: "about",
            position: { x: 700, y: 790 },
            data: {
                icon: "target",
                label: "Goals",
                description: "Build solid work experience • Work overseas",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
    ];

    const [rotateDegree, setRotateDegree] = useState(0);
    const rotateDegreeRef = useRef(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const startTimer = useCallback(() => {
        clearTimer();
        timeoutRef.current = setTimeout(() => {
            setRotateDegree((prev) => {
                const next = prev + 90;
                rotateDegreeRef.current = next;
                return next;
            });
            startTimer();
        }, quotes[(rotateDegreeRef.current / 90) % 4].time);
    }, []);

    const clearTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleQuoteEnter = () => {
        clearTimer();
    };

    const handleQuoteLeave = () => {
        startTimer();
    };

    useEffect(() => {
        startTimer();
        return () => clearTimer();
    }, [startTimer]);

    return (
        <>
            <section ref={sectionRef} className={`${styles.heroSection} h-[80vh] text-white transition-all duration-[.4s] bg-center`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
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
                            <div className="space-y-6">
                                <h1 className="text-7xl font-bold tracking-wider">Melvin Lin</h1>
                                <div className={`py-1.5 px-3 inline-block bg-white/70 rounded-lg text-3xl ${textColor}`}>
                                    <TypeAnimation sequence={sequence} wrapper="span" speed={50} repeat={Infinity} />
                                </div>
                                {/* <p className="text-4xl">Problem Solver...</p> */}
                            </div>
                            <div className="mt-8 mb-12 space-y-4 text-[22px]">
                                <div className="flex items-center space-x-3">
                                    <FaLocationPin />
                                    <p>Indonesia (Willing to Relocate Overseas)</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="w-5 h-5 bg-green-400 rounded-full border-2 border-white" aria-label="Available"></span>
                                    <p>Available Immediately</p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
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
            <section className={`${styles.quoteSection} py-28`}>
                <div className="container relative">
                    <div style={{ transform: `translate(-50%, -50%) rotateX(${rotateDegree}deg)` }} className={styles.box3d}>
                        {quotes.map((quote) => (
                            <div key={quote.text} className="mx-auto p-6 bg-white flex flex-col" onMouseEnter={handleQuoteEnter} onMouseLeave={handleQuoteLeave}>
                                <div className="flex-1">
                                    <Quote className="w-12 h-12 text-yellow-500" />
                                    <div className="mt-4 space-y-3 pl-16">
                                        <p className="text-3xl text-gray-800 italic tracking-wider leading-[1.45]">{quote.text}</p>
                                        <p className="text-xl text-gray-900 font-semibold text-right tracking-wider">— {quote.by}</p>
                                    </div>
                                </div>
                                <p className="mt-5 text-lg text-gray-500">{quote.why}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div ref={parentRef} className="relative bg-slate-50 relative floating-edges h-[1200px] pointer-events-none overflow-hidden">
                    <div ref={effectRef} className="absolute bg-emerald-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-[padding] duration-[7s]" style={{ padding: "110%" }}></div>
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
                </div>
            </section>
            <section>
                <div className="container py-20">
                    <h2 className="text-4xl font-bold text-center text-emerald-600 uppercase tracking-wider">Tech Stack</h2>
                    <div className="mt-8 flex justify-center">
                        <ul className="mx-auto py-3 px-4 flex items-center space-x-4 bg-slate-100 rounded-lg">
                            {thresholds.map((threshold, i) => (
                                <li key={threshold.color} className="flex items-center space-x-2">
                                    <div className="w-3 h-3 border border-gray-400 rounded-xs" style={{ backgroundColor: threshold.color }} aria-hidden="true"></div>
                                    <span className="text-sm">
                                        {threshold.label} ({i === 0 ? 0 : thresholds[i - 1].max + 1} - {threshold.max})
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="mb-5 text-2xl font-semibold text-center text-gray-700">Core Technologies</h3>
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
                                        hoverlabel: {
                                            bgcolor: "rgba(50,50,50,0.9)",
                                            bordercolor: "#888",
                                            font: { color: "#eee" },
                                        },
                                    }}
                                    config={{
                                        displayModeBar: false,
                                        scrollZoom: false,
                                    }}
                                />
                            </div>
                            <div>
                                <h3 className="mb-5 text-2xl font-semibold text-center text-gray-700">Frameworks</h3>
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
                                        hoverlabel: {
                                            bgcolor: "rgba(50,50,50,0.9)",
                                            bordercolor: "#888",
                                            font: { color: "#eee" },
                                        },
                                    }}
                                    config={{
                                        displayModeBar: false,
                                        scrollZoom: false,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-center text-gray-700">Dev Tools</h3>
                            <div className="mt-5 flex space-x-4">
                                {skill.tools.map((tool) => (
                                    <div key={tool.name} className="relative top-0 flex-1 rounded-lg p-4 bg-slate-100 text-white shadow-gray-300 group transition-all hover:-top-2 hover:shadow-lg">
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
                    <h2 className="mb-8 text-4xl font-bold text-emerald-600 uppercase tracking-wider">Project Highlights</h2>
                    <div>
                        <Carousel
                            items={projects.map((project) => (
                                <div key={project.id} className="bg-white group flex flex-col">
                                    <div className="relative h-48">
                                        <Image src={`/images/${project.thumbnail}`} alt={`${project.title} Thumbnail`} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 py-3 px-4 text-gray-700 flex flex-col justify-between">
                                        <div>
                                            <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                        <div className="ml-auto space-x-2">
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
                            height="350px"
                            startIndex={0}
                            autoPlay={false}
                            showStatus={false}
                            showIndicators={false}
                        />
                    </div>
                </div>
            </section>
            <section className="pt-20 bg-slate-100">
                <div className="container">
                    <h2 className="mb-8 text-4xl font-bold uppercase tracking-wider">Work Experience</h2>
                    <Timeline
                        data={workExperiences.map((workExperience) => ({
                            ...workExperience,
                            icon: "briefcasebusiness",
                            style: { icon: { background: "#0ea5e9", color: "#fff" } },
                        }))}
                        style={{ contentStyle: { borderRadius: "8px" } }}
                        layout="1-column-left"
                    >
                        {(item, isActive) => <WorkExperienceTimelineItem workExperience={item} isActive={isActive} />}
                    </Timeline>
                </div>
            </section>
            <section className="pt-40 bg-linear-to-b from-slate-100 to-transparent">
                <div className="container">
                    <h2 className="mb-8 text-4xl font-bold uppercase tracking-wider">Education</h2>
                    <Timeline<Education>
                        data={educations.map((workExperience) => ({
                            ...workExperience,
                            icon: "graduationcap",
                            style: { icon: { background: "#14b8a6", color: "#fff" } },
                        }))}
                        style={{ contentStyle: { borderRadius: "8px", boxShadow: "0 2px 10px 0 #ccc" }, contentArrowStyle: { display: "none" } }}
                    >
                        {(item, isActive) => <EducationTimelineItem education={item} isActive={isActive} />}
                    </Timeline>
                </div>
            </section>
            <section className="pt-40 pb-28 relative bg-[radial-gradient(closest-corner_at_50%_60%,_#CFFBE4,_white)]">
                <div className="container">
                    <h2 className="mb-8 text-4xl font-bold text-center uppercase tracking-wider">Let&apos;s Connect</h2>

                    <div className="flex space-x-6">
                        <div className="flex-1 py-4 px-4 bg-white rounded-xl shadow-[0_2px_10px_#ccc]">
                            <h3 className="mb-3 text-xl font-semibold text-center">Contacts</h3>
                            <ul className="space-y-0.5">
                                {contactLinks.map((externalProfile) => (
                                    <li key={externalProfile.platform}>
                                        <a
                                            href={externalProfile.url}
                                            target="_blank"
                                            className="py-2 px-3 flex space-x-3 border border-transparent cursor-pointer transition hover:bg-slate-100 hover:text-cyan-600 rounded-lg"
                                        >
                                            <IconWrapper name={externalProfile.icon} className="mt-0.5 w-6 h-6" />
                                            <div>
                                                <h3 className="text-xl font-medium">{externalProfile.platform}</h3>
                                                <p className="text-sm text-gray-700">{externalProfile.description ?? externalProfile.url}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 py-4 px-4 bg-white rounded-xl shadow-[0_2px_10px_#ccc]">
                            <h3 className="mb-3 text-xl font-semibold text-center">Coding Profiles</h3>
                            <ul className="space-y-0.5">
                                {codingProfiles.map((externalProfile) => (
                                    <li key={externalProfile.platform}>
                                        <a
                                            href={externalProfile.url}
                                            target="_blank"
                                            className="py-2 px-3 flex space-x-3 border border-transparent cursor-pointer transition hover:bg-slate-100 hover:text-cyan-600 rounded-lg"
                                        >
                                            <IconWrapper name={externalProfile.icon} className="mt-0.5 w-6 h-6" />
                                            <div>
                                                <h3 className="text-xl font-medium">{externalProfile.platform}</h3>
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
