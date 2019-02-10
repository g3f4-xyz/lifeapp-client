import { StyledComponentProps, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

const styles = {
  container: 'inline-flex',
};

interface Props extends StyledComponentProps<keyof typeof styles> {
  className?: string;
  children: React.ReactNode;
}

class Label extends React.Component<Props> {
  render(): React.ReactNode {
    const { className, classes, children } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <div className={classNames(className, classes.container)}>{children}</div>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(Label);
