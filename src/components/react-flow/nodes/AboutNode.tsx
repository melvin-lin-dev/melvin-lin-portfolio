"use client";

import Animate from "@/components/framer-motion/Animate";
import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import BREAKPOINTS from "@/lib/shared/constants/breakpoints";
import { shrinkFadeIn } from "@/lib/utils/framer-motion/motions";
import type { AboutNodeData } from "@/types/react-flow/about-node-data";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import React, { useRef } from "react";

export default function AboutNode({ data }: NodeProps<Node<AboutNodeData>>) {
    const effectRef = useRef<HTMLDivElement>(null);

    const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
        if (data.mainEffectRef.current && data.parentRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            effectRef.current!.style.left = x + "%";
            effectRef.current!.style.top = y + "%";

            const mainRect = data.parentRef.current.getBoundingClientRect();
            const mainX = ((e.clientX - mainRect.left) / mainRect.width) * 100;
            const mainY = ((e.clientY - mainRect.top) / mainRect.height) * 100;
            data.mainEffectRef.current.style.left = mainX + "%";
            data.mainEffectRef.current.style.top = mainY + "%";

            const edges: NodeListOf<SVGPathElement> = document.querySelectorAll(".react-flow__edge-path");

            if (data.mainEffectRef.current.style.padding === "0px") {
                let padding = "130%";
                if (window.innerWidth < BREAKPOINTS.md) padding = "145%";
                if (window.innerWidth < BREAKPOINTS.sm) padding = "380%";
                if (window.innerWidth < BREAKPOINTS.xs) padding = "570%";

                data.mainEffectRef.current.style.padding = padding;
                data.mainEffectRef.current.style.transitionDuration = "1.4s";
                edges.forEach((edge) => {
                    edge.style.stroke = "white";
                    edge.style.transition = "1.4s stroke";
                });
            } else {
                data.mainEffectRef.current.style.padding = "0";
                data.mainEffectRef.current.style.transitionDuration = ".7s";
                edges.forEach((edge) => {
                    edge.style.stroke = "#b1b1b7";
                    edge.style.transition = ".7s stroke";
                });
            }
        }
    };

    return (
        <>
            <Animate variants={shrinkFadeIn}>
                <div className="relative p-4 bg-white border rounded-lg shadow-md w-100 sm:w-80 text-center pointer-events-auto overflow-hidden group" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    <div ref={effectRef} className="absolute bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2 transition-[padding] duration-[.7s] group-hover:p-[110%]"></div>
                    <div className="relative">
                        <IconWrapper name={data.icon} className="mb-3 mx-auto text-emerald-500 transition duration-[.4s] group-hover:text-white w-8 h-8" />
                        <h3 className="sm:text-lg font-bold text-gray-700 transition duration-[.4s] group-hover:text-white tracking-wider">{data.label.toUpperCase()}</h3>
                        <p className="mt-1.5 text-gray-700 transition duration-[.4s] group-hover:text-white">{data.description}</p>
                    </div>
                </div>
            </Animate>
            <Handle type="source" position={Position.Right} />
            <Handle type="target" position={Position.Left} />
        </>
    );
}
