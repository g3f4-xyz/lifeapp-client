import {
  FormControl,
  StyledComponentProps,
  Theme,
  withStyles,
} from '@material-ui/core';
import React from 'react';

const styles = (theme: Theme) => ({
  container: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  children: React.ReactNode;
}

// @ts-ignore
@withStyles(styles)
class FieldContainer extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <FormControl className={classes.container}>
        {this.props.children}
      </FormControl>
    );
  }
}

export default FieldContainer;
