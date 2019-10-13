import { IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Clear, ZoomIn } from '@material-ui/icons';
import React, { Children, FC, useCallback, useState } from 'react';
import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout';
import { useHistory } from 'react-router-dom';
import useResponsiveGridStyles from './useResponsiveGridStyles';

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
  const { children } = props;
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
        {Children.map(children, (node, index) => (
          <Paper
            key={index}
            style={{ overflow: 'scroll' }}
            data-grid={{ w: 2, h: 3, x: index * 2, y: 0, minW: 2, minH: 3 }}
          >
            {node}
          </Paper>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export interface ResponsiveGridItemProps {
  path: string;
  fixed?: boolean;

  onRemove(moduleId: string): void;
}

export const ResponsiveGridItem: FC<ResponsiveGridItemProps> = props => {
  const { children, path, fixed, onRemove } = props;
  const history = useHistory();
  const classes = useResponsiveGridStyles();

  const handleRemove = useCallback(() => {
    onRemove(path);
  }, [path, onRemove]);

  const handleZoom = useCallback(() => {
    history.push(path);
  }, [history, path]);

  return (
    <div>
      {children}
      {!fixed && (
        <IconButton className={classes.remove} onClick={handleRemove}>
          <Clear />
        </IconButton>
      )}
      <IconButton className={classes.zoom} onClick={handleZoom}>
        <ZoomIn />
      </IconButton>
    </div>
  );
};

export default ResponsiveGrid;
