import { withStyles } from '@material-ui/core';
import { BugReport } from '@material-ui/icons';
import React from 'react';

const styles = {
  header: {
    fontSize: 72,
    textAlign: 'center',
  },
  icon: {
    marginLeft: '15%',
    width: '70%',
    height: '70%',
  },
};

interface Props {
  classes?: any;
  children: any;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    console.info(info);
    console.error(error);
  }

  render() {
    const { classes } = this.props;

    if (this.state.hasError) {
      return [
        <h1 key="ErrorBoundary:Header" className={classes.header}>ERROR!</h1>,
        <BugReport key="ErrorBoundary:BugReportIcon" className={classes.icon} />
      ];
    }

    return this.props.children;
  }
}

// @ts-ignore
export default withStyles(styles)(ErrorBoundary);
