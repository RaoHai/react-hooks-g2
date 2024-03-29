import * as React from 'react';
import * as G2 from '@antv/g2';

export type Callback = (chart: G2.Chart) => void;

export function UseG2<T>({
  callback,
  data,
  padding = 'auto',
}: {
  callback: Callback;
  data: T[];
  padding?: string | number | Array<string | number> ;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [chart, setChart] = React.useState<G2.Chart>();

  React.useEffect(() => {
    const current = ref.current as HTMLDivElement;
    if (!chart) {
      const newChart = new (G2.Chart as any)({
        container: current,
        width: current.clientWidth,
        height: current.clientHeight,
        padding,
        autoPaddingAppend: 0,
      });
      newChart.source(data);
      callback(newChart);
      setChart(newChart);
      newChart.render();
    } else {
      chart.clear();
      chart.changeData(data);
      callback(chart);
      chart.render();
    }

    return () => {
      chart && chart.destroy();
      setChart(undefined);
    };
  }, [ data ]);

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />;
};

export default UseG2;
