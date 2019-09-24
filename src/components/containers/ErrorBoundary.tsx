import { StyledComponentProps, withStyles } from '@material-ui/core';
import { BugReport } from '@material-ui/icons';
import React, { Fragment } from 'react';

const styles = {
  header: {
    fontSize: 72,
    textAlign: 'center'
  },
  icon: {
    marginLeft: '15%',
    width: '70%',
    height: '70%'
  }
};

interface Props extends StyledComponentProps<keyof typeof styles> {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false, error: new Error() };

  componentDidCatch(error: Error) {
    this.setState({ hasError: true, error });
  }

  render(): React.ReactNode {
    const { classes } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    if (this.state.hasError) {
      return (
        <Fragment>
          <h1 key="ErrorBoundary:Header" className={classes.header}>
            ERROR!
          </h1>
          <BugReport key="ErrorBoundary:BugReportIcon" className={classes.icon} />
          {/* eslint-disable-next-line no-undef */}
          {process.env.NODE_ENV === 'development' && (
            <div>
              <div>{this.state.error.name}</div>
              <div>{this.state.error.message}</div>
              <div>{this.state.error.stack}</div>
            </div>
          )}
        </Fragment>
      );
    }

    return this.props.children;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default withStyles(styles)(ErrorBoundary);
