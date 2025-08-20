declare module 'react-plotly.js' {
  import type { ComponentType } from 'react';
  import type { Layout, Data, Config } from 'plotly.js';

  interface PlotlyProps {
    data: Data[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    [key: string]: unknown;
  }

  const Plot: ComponentType<PlotlyProps>;
  export default Plot;
}
