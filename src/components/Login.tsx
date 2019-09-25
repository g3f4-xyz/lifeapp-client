import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { StyledComponentProps, Theme } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const styles = (theme: Theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Login(props: StyledComponentProps<keyof ReturnType<typeof styles>>) {
  const { classes } = props;

  if (!classes) {
    throw new Error(`error loading styles`);
  }

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                  WELCOME TO LIFEAPP
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Button size="large" href="auth/google" className={classes.button}>
                  Connect with Google
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Button size="large" href="demo" className={classes.button}>
                  Try Demo
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default withStyles(styles)(Login);
