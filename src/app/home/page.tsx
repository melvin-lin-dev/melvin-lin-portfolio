"use client";

import FloatingEdge from "@/components/react-flow/edges/FloatingEdge";
import { Background, Edge, Node, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { ReactElement } from "react";
import { FaLinkedin } from "react-icons/fa6";

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
            <section className="container">
                <div className="py-20">
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
                
            </section>
        </>
    );
}
