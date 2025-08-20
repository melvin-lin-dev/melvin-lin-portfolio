import Cube3DLoader from "@/common/components/loaders/cube-3d-loader/Cube3DLoader";
import type { ReactElement } from "react";

export default function PageLoader(): ReactElement {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-50 overflow-hidden">
            <Cube3DLoader />
        </div>
    );
}
