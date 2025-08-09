import type { Config, Layout, PlotData } from "plotly.js";

export interface WindRoseChartProps {
    data: Partial<PlotData>[];
    layout: Partial<Layout>;
    config: Partial<Config>;
}
