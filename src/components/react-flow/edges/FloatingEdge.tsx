'use client';

import { getEdgeParams } from '@/lib/utils/react-flow/floating-edge';
import { getBezierPath, useInternalNode } from '@xyflow/react';

type FloatingEdgeProps = {
  id: string;
  source: string;
  target: string;
  style?: React.CSSProperties;
};

export default function FloatingEdge({ id, source, target, style }: FloatingEdgeProps) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) return null;

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetX: tx,
    targetY: ty,
    targetPosition: targetPos,
  });

  return <path id={id} className="react-flow__edge-path" d={edgePath} style={style} />;
}
