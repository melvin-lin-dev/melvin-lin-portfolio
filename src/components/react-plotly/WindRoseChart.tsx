import { WindRoseChartProps } from "@/types/react-plotly/wind-rose-chart";
import { ReactElement } from "react";
import Plot from "react-plotly.js";

export default function WindRoseChart({ data, layout, config }: WindRoseChartProps): ReactElement {
    return (
        <Plot
            data={data}
            layout={layout}
            config={config}
        />
    );
}
