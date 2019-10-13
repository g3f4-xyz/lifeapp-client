import React, { Children, FC, useCallback, useState } from 'react';
import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function getFromLS(key: string): Layouts | null {
  let ls = {};

  if (localStorage) {
    try {
      ls = JSON.parse(localStorage.getItem('rgl-8') || '') || {};
    } catch (e) {
      /*Ignore*/
    }
  }

  return ls[key];
}

function saveToLS(key: string, value: Layouts) {
  if (localStorage) {
    localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      }),
    );
  }
}

const ResponsiveGrid: FC = props => {
  const [layouts, setLayouts] = useState(JSON.parse(JSON.stringify(getFromLS('layouts') || {})));

  const resetLayout = useCallback(() => {
    setLayouts({});
  }, [setLayouts]);

  const onLayoutChange = useCallback(
    (_currentLayout: Layout[], allLayouts: Layouts) => {
      saveToLS('layouts', allLayouts);
      setLayouts(allLayouts);
    },
    [setLayouts],
  );

  return (
    <div>
      <button onClick={resetLayout}>Reset Layout</button>
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
      >
        {Children.map(props.children, (node, index) => (
          <div
            key={index}
            style={{ border: 'solid', overflow: 'scroll' }}
            data-grid={{ w: 2, h: 3, x: index * 2, y: 0, minW: 2, minH: 3 }}
          >
            {node}
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default ResponsiveGrid;
