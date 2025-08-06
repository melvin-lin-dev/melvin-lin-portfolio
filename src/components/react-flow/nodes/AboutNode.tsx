"use client";

import { IconWrapper } from "@/components/icon/lucide/IconWrapper";
import { Handle, Position } from "@xyflow/react";

export default function AboutNode({ data }: any) {
    return (
        <button onClick={() => alert('a') }>
            <div className="p-4 bg-white border rounded shadow-md space-y-1 w-60">
                <IconWrapper name={data.icon} className="mx-auto text-gray-700" />
                <h3 className="font-semibold text-gray-700">{data.label}</h3>
                <p className="text-sm text-gray-500">{data.description}</p>
            </div>
            <Handle type="source" position={Position.Right} />
            <Handle type="target" position={Position.Left} />
        </button>
    );
}
