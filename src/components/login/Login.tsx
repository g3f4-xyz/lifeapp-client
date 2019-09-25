import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
import useLoginStyles from './useLoginStyles';

const Login: FC = () => {
  const classes = useLoginStyles();

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
};

export default Login;
