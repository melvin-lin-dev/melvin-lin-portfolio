"use client";

import Animate from "@/components/framer-motion/Animate";
import { shrinkFadeIn } from "@/utils/framer-motion/motions";
import { getSmoothStepPath, type Edge, type GetSmoothStepPathParams } from "@xyflow/react";

type AnimatedEdgeProps = Edge & GetSmoothStepPathParams;

export default function SmoothStepEdge({ id, style, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }: AnimatedEdgeProps) {
    const edgeConfig: GetSmoothStepPathParams = {
        sourceX: sourceX,
        sourceY: sourceY,
        targetX: targetX,
        targetY: targetY,
        sourcePosition: sourcePosition,
        targetPosition: targetPosition,
    };

    const [edgePath] = getSmoothStepPath(edgeConfig);

    return <Animate tag="path" variants={shrinkFadeIn} id={id} className="react-flow__edge-path" d={edgePath} style={style} />;
}
