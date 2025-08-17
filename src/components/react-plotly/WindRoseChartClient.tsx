"use client";

import RadioSignalLoader from "@/common/components/loaders/radio-signal-loader/RadioSignalLoader";
import type { WindRoseChartProps } from "@/types/react-plotly/wind-rose-chart";
import dynamic from "next/dynamic";
import type { ReactElement } from "react";

const WindRoseChart = dynamic(() => import("./WindRoseChart"), {
    ssr: false,
    loading: () => <RadioSignalLoader />,
});

export default function WindRoseChartClient(props: WindRoseChartProps): ReactElement {
    return <WindRoseChart {...props} />;
}
