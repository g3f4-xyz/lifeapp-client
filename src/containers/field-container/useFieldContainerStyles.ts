import { createStyles, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: theme.spacing(2),
      minWidth: theme.spacing(20),
      display: 'flex',
      flexGrow: 1,
    },
  }),
);
