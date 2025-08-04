"use client";

import { Handle, NodeProps, Position } from "@xyflow/react";
import { FaLinkedin } from "react-icons/fa6";

export default function AboutNode({ data }: any) {
    return (
        <button onClick={() => alert('a') }>
            <div className="p-4 bg-white border rounded shadow-md flex items-center space-x-2">
                <FaLinkedin className="text-blue-600" />
                <span>{data.label}</span>
                <Handle type="source" position={Position.Right} />
                <Handle type="target" position={Position.Left} />
            </div>
        </button>
    );
}
