import type { Config, Data, Layout } from "plotly.js";

export type PlotProps = {
    data: Data[];
    layout: Partial<Layout>;
    config?: Partial<Config>;
    [key: string]: unknown;
};
