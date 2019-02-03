import { IconButton, Paper, withStyles } from '@material-ui/core';
import { Clear, ZoomIn } from '@material-ui/icons';
import React from 'react';
import { Children } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

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

interface Props {
  classes?: any;
  layouts: any;
  onModuleClose: any;
  onModuleZoom: any;
  onLayoutChange: any;
}

class ResponsiveGrid extends React.PureComponent<Props> {
  static defaultProps = {
    className: 'layout',
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 30,
  };

  render() {
    const { classes, children, layouts, onLayoutChange, onModuleClose, onModuleZoom } = this.props;

    return (
      <div>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={layouts}
          onLayoutChange={onLayoutChange}
        >
          {Children.map(children, (node: any, key: any) => (
            <Paper className={classes.tileContainer} key={key} data-grid={{ w: 6, h: 4, x: key * 2, y: 0, minW: 1, minH: 1 }}>
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
      </div>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(ResponsiveGrid);
