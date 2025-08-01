'use client';

import { WindRoseChartProps } from "@/types/react-plotly/wind-rose-chart";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const WindRoseChart = dynamic(() => import('./WindRoseChart'), {
  ssr: false,
});

export default function WindRoseChartClient(props: WindRoseChartProps): ReactElement {
    return (
        <WindRoseChart {...props} />
    );
}
