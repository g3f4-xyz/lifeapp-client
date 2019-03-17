import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';
// @ts-ignore
import { Dot } from 'react-animated-dots';

const styles = (theme: Theme) => ({
  wrapper: {
    textAlign: 'center',
    margin: theme.spacing.unit,
    fontSize: '100px',
    lineHeight: 0,
    color: '#3f51b5',
  },
});

function Loader({ classes }: StyledComponentProps<keyof ReturnType<typeof styles>>) {
  if (!classes) {
    throw new Error(`error loading styles`);
  }

  return (
    <div className={classes.wrapper}>
      <Dot>.</Dot>
      <Dot>.</Dot>
      <Dot>.</Dot>
    </div>
  );
}

// @ts-ignore
export default withStyles(styles)(Loader);
