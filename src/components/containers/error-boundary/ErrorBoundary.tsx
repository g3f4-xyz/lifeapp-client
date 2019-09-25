import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import { BugReport } from '@material-ui/icons';
import React, { Fragment } from 'react';

const styles = createStyles({
  header: {
    fontSize: 72,
    textAlign: 'center',
  },
  icon: {
    marginLeft: '15%',
    width: '70%',
    height: '70%',
  },
});

interface State {
  hasError: boolean;
  error: Error;
}

class ErrorBoundary extends React.Component<WithStyles, State> {
  state = { hasError: false, error: new Error() };

  componentDidCatch(error: Error) {
    this.setState({ hasError: true, error });
  }

  render(): React.ReactNode {
    const { classes } = this.props;

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

export default withStyles(styles)(ErrorBoundary);
