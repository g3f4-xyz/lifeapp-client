import { createStyles, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    list: {
      width: '100%',
    },
  }),
);
