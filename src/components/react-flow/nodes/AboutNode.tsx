"use client";

import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import { Handle, Position } from "@xyflow/react";

export default function AboutNode({ data }: any) {
    return (
        <>
            <div className="p-4 bg-white border rounded-lg shadow-md w-80 text-center">
                <IconWrapper name={data.icon} className="mb-3 mx-auto text-emerald-500 w-8 h-8" />
                <h3 className="text-lg font-bold text-gray-700 tracking-wider">{data.label.toUpperCase()}</h3>
                <p className="mt-1.5 text-gray-700">{data.description}</p>
            </div>
            <Handle type="source" position={Position.Right} />
            <Handle type="target" position={Position.Left} />
        </>
    );
}
