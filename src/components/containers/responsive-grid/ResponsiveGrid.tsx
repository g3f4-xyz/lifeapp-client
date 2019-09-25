import { IconButton, Paper } from '@material-ui/core';
import { Clear, ZoomIn } from '@material-ui/icons';
import React, { Children, FC, ReactElement } from 'react';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';
import { ModuleProps } from '../../App';
import useResponsiveGridStyles from './useResponsiveGridStyles';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export interface ResponsiveGridProps extends ResponsiveProps {
  onModuleClose(moduleId: string): void;
  onModuleZoom(moduleId: string): void;
}

const ResponsiveGrid: FC<ResponsiveGridProps> = props => {
  const { children, layouts, onLayoutChange, onModuleClose, onModuleZoom } = props;
  const classes = useResponsiveGridStyles();

  if (!children) {
    return null;
  }

  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      layouts={layouts}
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      onLayoutChange={onLayoutChange}
    >
      {Children.map(
        children as ReactElement<ModuleProps>,
        (node: ReactElement<ModuleProps>, key: number) =>
          node &&
          node.props && (
            <Paper
              className={classes.tileContainer}
              key={node.props.moduleId}
              data-grid={{ w: 6, h: 4, x: key * 2, y: 0, minW: 1, minH: 1 }}
            >
              {node}
              <IconButton
                className={classes.remove}
                onClick={() => onModuleClose(node.props.moduleId)}
              >
                <Clear />
              </IconButton>
              <IconButton
                className={classes.zoom}
                onClick={() => onModuleZoom(node.props.moduleId)}
              >
                <ZoomIn />
              </IconButton>
            </Paper>
          ),
      )}
    </ResponsiveReactGridLayout>
  );
};

ResponsiveGrid.defaultProps = {
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight: 30,
};

export default ResponsiveGrid;
