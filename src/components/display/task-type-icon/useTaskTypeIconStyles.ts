import { createStyles, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: theme.spacing(3),
    },
  }),
);
