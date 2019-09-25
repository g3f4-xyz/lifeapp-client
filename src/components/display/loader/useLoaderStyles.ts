import { createStyles, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      textAlign: 'center',
      margin: theme.spacing(1),
      fontSize: '100px',
      lineHeight: 0,
      color: '#3f51b5',
    },
  }),
);
