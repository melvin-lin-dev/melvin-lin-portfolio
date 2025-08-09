import FloatingEdge from "@/components/react-flow/edges/FloatingEdge";
import AboutNode from "@/components/react-flow/nodes/AboutNode";
import type { AboutNodeData } from "@/types/react-flow/about-node-data";
import { ReactFlow, type Edge, type Node } from "@xyflow/react";
import { useRef, type ReactElement } from "react";

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

export default function AboutContainer(): ReactElement {
    const parentRef = useRef<HTMLDivElement>(null);
    const effectRef = useRef<HTMLDivElement>(null);

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

    return (
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
    );
}
