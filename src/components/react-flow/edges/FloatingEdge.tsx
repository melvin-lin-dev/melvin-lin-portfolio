"use client";

import Animate from "@/components/framer-motion/Animate";
import { shrinkFadeIn } from "@/utils/framer-motion/motions";
import { getEdgeParams } from "@/utils/react-flow/floating-edge";
import { getBezierPath, getSmoothStepPath, useInternalNode } from "@xyflow/react";

interface FloatingEdgeProps {
    id: string;
    source: string;
    target: string;
    style?: React.CSSProperties;
    data?: { edgeType?: "bezier" | "smoothstep" | "step" };
}

export default function FloatingEdge({ id, source, target, style, data = { edgeType: "bezier" } }: FloatingEdgeProps) {
    const sourceNode = useInternalNode(source);
    const targetNode = useInternalNode(target);

    if (!sourceNode || !targetNode) return null;

    const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

    let edgePath: string;

    const edgeConfig = {
        sourceX: sx,
        sourceY: sy,
        sourcePosition: sourcePos,
        targetX: tx,
        targetY: ty,
        targetPosition: targetPos,
    };

    switch (data.edgeType) {
        case "smoothstep":
            [edgePath] = getSmoothStepPath({
                ...edgeConfig,
            });
            break;
        case "bezier":
        default:
            [edgePath] = getBezierPath({
                ...edgeConfig,
            });
            break;
    }

    return <Animate tag="path" variants={shrinkFadeIn} id={id} className="react-flow__edge-path" d={edgePath} style={style} />;
}
