import { IconButton, Paper, StyledComponentProps, withStyles } from '@material-ui/core';
import { Clear, ZoomIn } from '@material-ui/icons';
import React, { ReactChild, ReactChildren, ReactElement } from 'react';
import { Children } from 'react';
import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout';
import { ModuleProps } from '../App';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const styles = {
  tileContainer: {
    overflow: 'scroll',
  },
  remove: {
    position: 'absolute',
    right: 0,
    top: 0,
    cursor: 'pointer',
  },
  zoom: {
    position: 'absolute',
    top: 0,
    cursor: 'pointer',
  },
};

interface Props extends StyledComponentProps<keyof typeof styles> {
  layouts: Layouts;
  onModuleClose(moduleId: string): void;
  onModuleZoom(moduleId: string): void;
  onLayoutChange(currentLayout: Layout, allLayouts: Layouts): void;
}

class ResponsiveGrid extends React.PureComponent<Props> {
  static defaultProps = {
    className: 'layout',
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 30,
  };

  render(): React.ReactNode {
    const { classes, children, layouts, onLayoutChange, onModuleClose, onModuleZoom } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    if (!children) {
      return null;
    }

    return (
      <ResponsiveReactGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
      >
        {Children.map(
          children as ReactElement<ModuleProps>,
          (node: ReactElement<ModuleProps>, key: number,
          ) => node && node.props && (
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
        ))}
      </ResponsiveReactGridLayout>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(ResponsiveGrid);
