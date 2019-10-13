import React, { Children } from 'react';
import { WidthProvider, Responsive, Layout, Layouts } from 'react-grid-layout';

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

export default class ResponsiveGrid extends React.PureComponent {
  state = {
    layouts: JSON.parse(JSON.stringify(getFromLS('layouts') || {})),
  };

  static defaultProps = {
    className: 'layout',
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 30,
  };

  resetLayout = () => {
    this.setState({ layouts: {} });
  };

  onLayoutChange = (_currentLayout: Layout[], allLayouts: Layouts) => {
    saveToLS('layouts', allLayouts);
    this.setState({ layouts: allLayouts });
  };

  render() {
    return (
      <div>
        <button onClick={this.resetLayout}>Reset Layout</button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={50}
          layouts={this.state.layouts}
          onLayoutChange={this.onLayoutChange}
        >
          {Children.map(this.props.children, (node, index) => (
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
  }
}
