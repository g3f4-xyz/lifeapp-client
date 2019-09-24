import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';

const styles = (theme: Theme) => ({
  wrapper: {
    textAlign: 'center',
    margin: theme.spacing(1),
    fontSize: '100px',
    lineHeight: 0,
    color: '#3f51b5'
  }
});

function Loader({ classes }: StyledComponentProps<keyof ReturnType<typeof styles>>) {
  if (!classes) {
    throw new Error(`error loading styles`);
  }

  return <div className={classes.wrapper}>...</div>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default withStyles(styles)(Loader);
