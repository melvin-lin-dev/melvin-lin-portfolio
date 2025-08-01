declare module 'react-plotly.js' {
  import { ComponentType } from 'react';
  import { Layout, Data, Config } from 'plotly.js';

  interface PlotlyProps {
    data: Data[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    [key: string]: unknown;
  }

  const Plot: ComponentType<PlotlyProps>;
  export default Plot;
}
