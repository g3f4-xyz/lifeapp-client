import { createStyles, Theme } from '@material-ui/core';
import { green, grey, red, yellow } from '@material-ui/core/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    content: {
      display: 'block',
    },
    heading: {
      maxHeight: '1.8em',
      overflow: 'scroll',
      flex: 1,
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
      marginTop: theme.spacing(1),
    },
    icon: {
      fontSize: theme.spacing(5),
    },
    green: {
      color: green[700],
    },
    grey: {
      color: grey[700],
    },
    red: {
      color: red[700],
    },
    taskTypeIcon: {
      marginTop: theme.spacing(1) * 1.5,
    },
    yellow: {
      color: yellow[700],
    },
  }),
);
