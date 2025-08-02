import FloatingEdge from "@/components/react-flow/edges/FloatingEdge";
import { Background, Edge, Node, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { ReactElement } from "react";
import { FaLinkedin } from "react-icons/fa6";

import WindRoseChartClient from "@/components/react-plotly/WindRoseChartClient";
import Timeline from "@/components/react-vertical-timeline/Timeline";

const nodes: Node[] = [
    {
        id: "n1",
        position: { x: 0, y: 0 },
        data: { label: "Node 1" },
    },
    {
        id: "n2",
        position: { x: 100, y: 100 },
        data: { label: "Node 2" },
    },
    {
        id: "n3",
        position: { x: 200, y: 0 },
        data: { label: "Node 3" },
    },
];

const edges: Edge[] = [
    {
        id: "n1-n2",
        source: "n1",
        target: "n2",
        type: "floating",
    },
    {
        id: "n2-n3",
        source: "n2",
        target: "n3",
        type: "floating",
    },
];

const edgeTypes = {
    floating: FloatingEdge,
};

export default function HomePage(): ReactElement {
    return (
        <>
            <section>
                <div className="container py-20">
                    <h1 className="text-6xl">Melvin Lin</h1>
                    <h4 className="mt-4 mb-8">Problem Solver...</h4>
                    <ul className="flex space-x-2">
                        {[...Array(5)].map((_, index) => (
                            <li key={index}>
                                <a href="" className="inline-block p-4 rounded-full bg-gray-200">
                                    <FaLinkedin />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button type="button" className="py-2 px-4 rounded-full bg-gray-200 mt-4">
                        Discover More
                    </button>
                </div>
            </section>
            <section>
                <div className="floating-edges h-100 border">
                    <ReactFlow nodes={nodes} edges={edges} edgeTypes={edgeTypes} fitView>
                        <Background />
                    </ReactFlow>
                </div>
            </section>
            <section>
                <div className="container">
                    <WindRoseChartClient
                        data={[
                            {
                                type: "barpolar",
                                r: [10, 15, 13, 17, 22, 18, 12, 8],
                                theta: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
                                name: "Beginner",
                                marker: {
                                    color: "rgba(93, 164, 214, 0.6)",
                                },
                            },
                            {
                                type: "barpolar",
                                r: [5, 10, 7, 12, 15, 10, 8, 6],
                                theta: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
                                name: "Intermediate",
                                marker: {
                                    color: "rgba(255, 144, 14, 0.6)",
                                },
                            },
                            {
                                type: "barpolar",
                                r: [2, 5, 3, 6, 7, 5, 3, 2],
                                theta: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
                                name: "Advanced",
                                marker: {
                                    color: "rgba(44, 160, 101, 0.6)",
                                },
                            },
                        ]}
                        layout={{
                            title: { text: "Skill Wind Rose Chart" },
                            width: 500,
                            height: 500,
                            polar: {
                                radialaxis: {
                                    ticksuffix: "%",
                                    angle: 45,
                                    visible: true,
                                },
                            },
                            showlegend: true,
                        }}
                    ></WindRoseChartClient>
                </div>
            </section>
            <section className="py-20">
                <div className="container">
                    <h1 className="text-3xl mb-8">Project Highlight</h1>
                    <div className="image-perspective grid grid-cols-4 gap-x-3 gap-y-4">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-400">
                <div className="container">
                    <h1 className="text-3xl mb-8">Work Experience</h1>
                    <Timeline></Timeline>
                </div>
            </section>
            <section className="py-20 bg-gray-400">
                <div className="container">
                    <h1 className="text-3xl mb-8">Education</h1>
                    <Timeline></Timeline>
                </div>
            </section>
            <section className="py-20 bg-blue-200 relative">
                <div className="container">
                    <h1 className="text-3xl mb-8">Lets Work Together</h1>
                    <div className="h-40">
                        <ul>
                            <li className="absolute top-[30%] left-[50%]">
                                <a href="" className="inline-block p-4 rounded-full bg-gray-200 scale-[0.5] opacity-50 cursor-not-allowed">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li className="absolute top-[50%] left-[50%]">
                                <a href="" className="inline-block p-4 rounded-full bg-gray-200">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li className="absolute top-[30%] left-[40%]">
                                <a href="" className="inline-block p-4 rounded-full bg-gray-200">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li className="absolute top-[70%] left-[80%]">
                                <a href="" className="inline-block p-4 rounded-full bg-gray-200">
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
