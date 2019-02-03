import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

const styles = {
  container: 'inline-flex',
};

interface Props {
  classes?: any;
  className: any;
  children: any;
}

class Label extends React.Component<Props> {
  render() {
    const { className, classes, children } = this.props;

    return (
      <div className={classNames(className, classes.container)}>{children}</div>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(Label);
