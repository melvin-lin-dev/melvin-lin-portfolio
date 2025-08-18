"use client";

import FloatingEdge from "@/components/react-flow/edges/FloatingEdge";
import SmoothStepEdge from "@/components/react-flow/edges/SmoothStepEdge";
import AboutNode from "@/components/react-flow/nodes/AboutNode";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";
import type { Screen } from "@/lib/shared/types/screen";
import type { AboutNodeData } from "@/types/react-flow/about-node-data";
import { ReactFlow, ReactFlowProvider, useReactFlow, type Edge, type Node, type XYPosition } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useEffect, useRef, useState, type ReactElement } from "react";

const nodeHeight = 220;

const nodePositions: Record<Screen, Record<string, XYPosition>> = {
    desktop: {
        about: { x: 0, y: 0 },

        background: { x: -460, y: nodeHeight },
        traits: { x: 0, y: nodeHeight },
        skills: { x: 460, y: nodeHeight },

        work_status: { x: -460, y: nodeHeight * 2 },
        recent_work: { x: 0, y: nodeHeight * 2 },
        working_on: { x: 460, y: nodeHeight * 2 },

        learning: { x: 0, y: nodeHeight * 3 },

        goal: { x: 0, y: nodeHeight * 4 },
    },

    tablet: {
        about: { x: 0, y: 0 },

        background: { x: 0, y: nodeHeight },

        traits: { x: -230, y: nodeHeight * 2 },
        skills: { x: 230, y: nodeHeight * 2 },

        work_status: { x: 0, y: nodeHeight * 3 },

        recent_work: { x: -230, y: nodeHeight * 4 },
        working_on: { x: 230, y: nodeHeight * 4 },

        learning: { x: 0, y: nodeHeight * 5 },

        goal: { x: 0, y: nodeHeight * 6 },
    },

    phone: {
        about: { x: 0, y: 0 },
        background: { x: 0, y: nodeHeight },
        traits: { x: 0, y: nodeHeight * 2 },
        skills: { x: 0, y: nodeHeight * 3 },
        work_status: { x: 0, y: nodeHeight * 4 },
        recent_work: { x: 0, y: nodeHeight * 5 },
        working_on: { x: 0, y: nodeHeight * 6 },
        learning: { x: 0, y: nodeHeight * 7 },
        goal: { x: 0, y: nodeHeight * 8 },
    },
};

const edgeConfigs: Partial<Record<Screen, Record<string, Partial<Edge>>>> = {
    desktop: {
        e_skills_work_status: {
            type: "smoothstep",
        },
    },
};

export default function AboutContainer(): ReactElement {
    return (
        <ReactFlowProvider>
            <AboutFlow />
        </ReactFlowProvider>
    );
}

function AboutFlow(): ReactElement {
    const { fitView } = useReactFlow();

    const parentRef = useRef<HTMLDivElement>(null);
    const effectRef = useRef<HTMLDivElement>(null);

    const [nodes, setNodes] = useState<Node<AboutNodeData>[]>([
        {
            id: "about",
            type: "about",
            position: nodePositions.desktop.about,
            data: {
                icon: "user",
                label: "About Me",
                description: "Software Engineer passionate about AI integrations",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
        {
            id: "background",
            type: "about",
            position: nodePositions.desktop.background,
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
            position: nodePositions.desktop.work_status,
            data: {
                icon: "briefcase",
                label: "Current Status",
                description: "Open to onsite work • Willing to relocate",
                mainEffectRef: effectRef,
                parentRef,
            },
        },

        {
            id: "skills",
            type: "about",
            position: nodePositions.desktop.skills,
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
            position: nodePositions.desktop.traits,
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
            position: nodePositions.desktop.recent_work,
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
            position: nodePositions.desktop.working_on,
            data: {
                icon: "code",
                label: "Current Projects",
                description: "Rebuilding AI face recognition app • Portfolio",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
        {
            id: "learning",
            type: "about",
            position: nodePositions.desktop.learning,
            data: {
                icon: "book",
                label: "Daily Learning",
                description: "React/Next clean code • Competitive programming • Chinese • Psychology & self-discipline",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
        {
            id: "goal",
            type: "about",
            position: nodePositions.desktop.goal,
            data: {
                icon: "target",
                label: "Goals",
                description: "Build solid work experience • Work overseas",
                mainEffectRef: effectRef,
                parentRef,
            },
        },
    ]);

    const [edges, setEdges] = useState<Edge[]>([
        { id: "e_about_background", source: "about", target: "background", style: { strokeWidth: 5 }, animated: true },
        { id: "e_background_traits", source: "background", target: "traits", style: { strokeWidth: 5 }, animated: true },
        { id: "e_traits_skills", source: "traits", target: "skills", style: { strokeWidth: 5 }, animated: true },
        { id: "e_skills_work_status", source: "skills", target: "work_status", style: { strokeWidth: 5 }, animated: true },
        { id: "e_work_status_recent_work", source: "work_status", target: "recent_work", style: { strokeWidth: 5 }, animated: true },
        { id: "e_recent_work_working_on", source: "recent_work", target: "working_on", style: { strokeWidth: 5 }, animated: true },
        { id: "e_working_on_learning", source: "working_on", target: "learning", style: { strokeWidth: 5 }, animated: true },
        { id: "e_learning_goal", source: "learning", target: "goal", style: { strokeWidth: 5 }, animated: true },
    ]);

    const [effectPadding, setEffectPadding] = useState<string>("0");

    useEffect(() => {
        const handleResize = () => {
            window.requestAnimationFrame(() => fitView());
            let screenType: Screen = "desktop";

            if (window.innerWidth < BREAKPOINTS.md) screenType = "tablet";
            if (window.innerWidth < BREAKPOINTS.sm) screenType = "phone";

            setNodes((prevNodes) =>
                prevNodes.map((node) => ({
                    ...node,
                    position: nodePositions[screenType][node.id],
                }))
            );

            setEdges((prevEdges) =>
                prevEdges.map((edge) => ({
                    ...edge,
                    ...(edgeConfigs[screenType]?.[edge.id] || { type: "floating" }),
                }))
            );

            let padding = "130%";
            if (window.innerWidth < BREAKPOINTS.md) padding = "145%";
            if (window.innerWidth < BREAKPOINTS.sm) padding = "380%";
            if (window.innerWidth < BREAKPOINTS.xs) padding = "570%";

            setEffectPadding(padding);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [fitView]);

    return (
        <section id="about-section">
            <div ref={parentRef} className="relative bg-slate-50 relative floating-edges h-[1200px] sm:h-[800px] lg:h-[1000px] xl:h-[1200px] pointer-events-none overflow-hidden">
                <div ref={effectRef} className="absolute bg-emerald-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-[padding] duration-[7s]" style={{ padding: effectPadding }}></div>
                <ReactFlow
                    fitView
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={{ about: AboutNode }}
                    edgeTypes={{ smoothstep: SmoothStepEdge, floating: FloatingEdge }}
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
    );
}
