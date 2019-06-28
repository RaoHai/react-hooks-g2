import React, { useEffect, useRef, useState } from 'react';
import G2 from '@antv/g2';

export type Callback = (chart: G2.Chart) => void;

export function UseG2<T>({ callback, data }: { callback: Callback, data: T[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<G2.Chart>();

  useEffect(() => {
    const current = ref.current as HTMLDivElement;
    if (!chart) {
      const newChart = new (G2.Chart as any)({
        container: current,
        width: current.clientWidth,
        height: current.clientHeight,
        padding: 'auto',
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
