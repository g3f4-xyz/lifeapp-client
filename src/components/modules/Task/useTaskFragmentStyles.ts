import { createStyles, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
      },
      [theme.breakpoints.up('xl')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
      },
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(1),
    },
    rowField: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: theme.spacing(1),
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    doneButton: {
      zIndex: 9,
      position: 'fixed',
      bottom: 20,
      right: 20,
    },
    doneButtonIcon: {
      color: '#8BC34A',
      fontSize: 72,
    },
  }),
);
