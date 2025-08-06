export interface WindRoseChartProps {
  data: WindRosePlotlyData[];
  layout: Partial<Plotly.Layout>;
  config: any;
}

export type WindRosePlotlyData = {
    type: "barpolar";
    r: number[];
    theta: string[];
    name: string;
    marker?: {
        color?: string;
    };
};
