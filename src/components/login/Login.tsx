import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { FC, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import OAuth from './OAuth';
import useLoginStyles from './useLoginStyles';

const providers = [
  'google',
  // 'github',
];

const Login: FC = () => {
  const classes = useLoginStyles();
  const history = useHistory();
  const { loading, userInfo, setUserInfo } = useContext(AuthContext);
  const handleDemo = useCallback(() => {
    history.push('/app');
  }, [history]);

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
                {loading
                  ? 'Preparing authorization...'
                  : providers.map(provider => (
                      <OAuth
                        provider={provider}
                        key={provider}
                        onUserInfo={setUserInfo}
                        userInfo={userInfo}
                      />
                    ))}
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Button size="large" onClick={handleDemo} className={classes.button}>
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
