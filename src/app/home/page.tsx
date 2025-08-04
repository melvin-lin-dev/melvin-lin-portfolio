import type { ReactElement } from "react";
import { Background, Edge, Node, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { FaCircle, FaDownload, FaLinkedin, FaLocationArrow, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";

import FloatingEdge from "@/components/react-flow/edges/FloatingEdge";
import WindRoseChartClient from "@/components/react-plotly/WindRoseChartClient";
import Timeline from "@/components/react-vertical-timeline/Timeline";

import styles from "./home.module.scss";
import AboutNode from "@/components/react-flow/nodes/AboutNode";
import Image from "next/image";

const nodes: Node[] = [
    {
        id: "n1",
        type: "about",
        position: { x: 0, y: 0 },
        data: { label: "Node 1" },
    },
    {
        id: "n2",
        type: "about",
        position: { x: 100, y: 100 },
        data: { label: "Node 2" },
    },
    {
        id: "n3",
        type: "about",
        position: { x: 200, y: 0 },
        data: { label: "Node 3" },
    },
];

const edges: Edge[] = [
    {
        id: "n1-n2",
        source: "n1",
        target: "n2",
    },
    {
        id: "n2-n3",
        source: "n2",
        target: "n3",
    },
];

const edgeTypes = {
    floating: FloatingEdge,
};

const skills = [
    { name: "HTML", value: 8 },
    { name: "CSS/LESS/LASS", value: 8 },
    { name: "TS", value: 8 },
    { name: "PHP", value: 7 },
    { name: "Python", value: 7 },
    { name: "Flutter", value: 7 },
];

const levels = [
    {
        min: 1,
        color: "rgba(93, 164, 214, 0.6)",
        label: "Beginner",
    },
    {
        min: 4,
        color: "rgba(255, 144, 14, 0.6)",
        label: "Intermediate",
    },
    {
        min: 7,
        color: "rgba(44, 160, 101, 0.6)",
        label: "Advanced",
    },
].map((level) => {
    let r = [];
    let theta = [];

    skills.forEach((skill) => {
        r.push(skill.value >= level.min ? level.min : null);
        theta.push(skill.name);
    });

    return {
        type: "barpolar",
        r,
        theta,
        name: level.label,
        marker: {
            color: level.color,
        },
    };
});

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
                            {[...Array(5)].map((_, index) => (
                                <li key={index}>
                                    <a href="">
                                        <FaLinkedin className="w-8 h-8" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="floating-edges h-100 border">
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
                    <h2 className="text-3xl font-bold text-center">Skills</h2>
                    <div>
                        <div className="mt-8 grid grid-cols-2">
                            <div>
                                <h3 className="text-xl font-semibold text-center text-gray-700">Core Techs</h3>
                                <WindRoseChartClient
                                    data={levels}
                                    layout={{
                                        dragmode: false,
                                        margin: { t: 0, b: 0 },
                                        width: 500,
                                        height: 400,
                                        polar: {
                                            radialaxis: {
                                                angle: 90,
                                                visible: true,
                                                fixedrange: true,
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
                                <h3 className="text-xl font-semibold text-center text-gray-700">Core Techs</h3>
                                <WindRoseChartClient
                                    data={levels}
                                    layout={{
                                        dragmode: false,
                                        margin: { t: 0, b: 0 },
                                        width: 500,
                                        height: 400,
                                        polar: {
                                            radialaxis: {
                                                angle: 90,
                                                visible: true,
                                                fixedrange: true,
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
                        <div>
                            <h3 className="text-xl font-semibold text-center text-gray-700">Tools</h3>
                            <div className="mt-4 flex space-x-4">
                                {new Array(5).fill(0).map((item, i) => (
                                    <div key={i} className="flex-1 rounded-lg p-4 bg-gray-100 text-white">
                                        <div className="relative w-10 h-10 mx-auto">
                                            <Image src="/images/angular.webp" alt="Angular Logo" className="object-contain" fill />
                                        </div>
                                        <h4 className="mt-2 text-lg font-semibold text-gray-700 text-center">GitHub</h4>
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
                        {new Array(5).fill(0).map((item, i) => (
                            <div key={i} className="w-full relative rounded-lg overflow-hidden group">
                                <Image src="/images/star-battle.jpg" alt="Star Battle Thumbnail" fill />
                                <div className="relative p-4 w-full h-full bg-black/50 text-white transition opacity-0 group-hover:opacity-100">
                                    <h3 className="text-xl font-semibold">Star Battle</h3>
                                    <p className="mt-1.5">Best Student Award - Jawara Game Indonesia</p>
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
                    <Timeline
                        data={[
                            {
                                startDate: "2016",
                                endDate: "today",
                                icon: <FaLinkedin />,
                                position: "Software Engineer",
                                location: "Indonesia",
                                description: (
                                    <ul>
                                        <li>testing</li>
                                    </ul>
                                ),
                            },
                            {
                                startDate: "2011",
                                endDate: "2015",
                                icon: <FaLinkedin />,
                                position: "Software Engineer",
                                location: "Indonesia",
                                description: (
                                    <ul>
                                        <li>testing</li>
                                    </ul>
                                ),
                            },
                        ]}
                    ></Timeline>
                </div>
            </section>
            <section className="py-20 bg-gray-150">
                <div className="container">
                    <h2 className="text-3xl mb-8">Education</h2>
                    <Timeline
                        data={[
                            {
                                startDate: "2016",
                                endDate: "today",
                                icon: <FaLinkedin />,
                                position: "Software Engineer",
                                location: "Indonesia",
                                description: (
                                    <ul>
                                        <li>testing</li>
                                    </ul>
                                ),
                            },
                            {
                                startDate: "2011",
                                endDate: "2015",
                                icon: <FaLinkedin />,
                                position: "Software Engineer",
                                location: "Indonesia",
                                description: (
                                    <ul>
                                        <li>testing</li>
                                    </ul>
                                ),
                            },
                        ]}
                    ></Timeline>
                </div>
            </section>
            <section className="py-20 bg-blue-200 relative">
                <div className="container">
                    <h2 className="text-3xl mb-8">Lets Work Together</h2>
                    <div>
                        <ul className="space-y-6">
                            <li className="flex space-x-3">
                                <FaLinkedin className="mt-0.5 w-6 h-6" />
                                <div>
                                    <h3 className="text-xl">LinkedIn</h3>
                                    <a href="">https://www.linkedin.com/in/melvin-lin-dev/</a>
                                </div>
                            </li>
                            <li className="flex space-x-3">
                                <FaLinkedin className="mt-0.5 w-6 h-6" />
                                <div>
                                    <h3 className="text-xl">LinkedIn</h3>
                                    <a href="">https://www.linkedin.com/in/melvin-lin-dev/</a>
                                </div>
                            </li>
                            <li className="flex space-x-3">
                                <FaLinkedin className="mt-0.5 w-6 h-6" />
                                <div>
                                    <h3 className="text-xl">LinkedIn</h3>
                                    <a href="">https://www.linkedin.com/in/melvin-lin-dev/</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
