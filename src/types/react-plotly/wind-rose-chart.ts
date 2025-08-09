import type { Config, Layout, PlotData } from "plotly.js";

export type WindRoseChartProps = {
    data: Partial<PlotData>[];
    layout: Partial<Layout>;
    config: Partial<Config>;
}
