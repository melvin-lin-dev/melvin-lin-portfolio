"use client";

import RadioSignalLoader from "@/common/components/loaders/radio-signal-loader/RadioSignalLoader";
import type { PlotProps } from "@/types/react-plotly/plot-props";
import dynamic from "next/dynamic";
import type { ReactElement } from "react";

const ReactPlotly = dynamic(() => import("react-plotly.js"), {
    ssr: false,
    loading: () => <RadioSignalLoader />,
});

export default function Plot({ ...props }: PlotProps): ReactElement {
    return <ReactPlotly {...props} />;
}
