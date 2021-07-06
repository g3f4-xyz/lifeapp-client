import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useLoginStyles from './useLoginStyles';
import { useAuth0 } from '@auth0/auth0-react';

interface UserInfo {
  picture: string;
  name: string;
}

const Login: FC = () => {
  const classes = useLoginStyles();
  const history = useHistory();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0<UserInfo>();

  const navigateToApp = useCallback(() => {
    history.push('/app');
  }, [history]);

  const handleLogIn = useCallback(() => {
    loginWithRedirect().then(() => {});
  }, [loginWithRedirect]);

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
                <Button size="large" onClick={handleLogIn} className={classes.button}>
                  {isAuthenticated ? `Hi ${user && user.name}!` : 'Log in'}
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Button size="large" onClick={navigateToApp} className={classes.button}>
                  App
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
