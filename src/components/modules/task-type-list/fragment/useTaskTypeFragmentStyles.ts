import { createStyles, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    actionsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: theme.spacing(1) * 2 * 8,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(1) * 2 * 12,
      },
      [theme.breakpoints.up('md')]: {
        width: theme.spacing(1) * 2 * 16,
      },
    },
    nameContainer: {
      fontSize: theme.spacing(3),
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.spacing(4),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: theme.spacing(5),
      },
    },
    descContainer: {
      flexGrow: 1,
      fontSize: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.spacing(4),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: theme.spacing(5),
      },
    },
    descText: {
      padding: 0,
      margin: 0,
      fontSize: theme.spacing(1) * 1.5,
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: theme.spacing(3),
      },
    },
    icon: {
      height: '100%',
      width: '100%',
    },
    infoButton: {
      color: '#505ae8',
      height: 64,
      width: 64,
      [theme.breakpoints.up('sm')]: {
        height: 80,
        width: 80,
      },
      [theme.breakpoints.up('md')]: {
        height: 96,
        width: 96,
      },
    },
    addButton: {
      color: '#8BC34A',
      height: 64,
      width: 64,
      [theme.breakpoints.up('sm')]: {
        height: 80,
        width: 80,
      },
      [theme.breakpoints.up('md')]: {
        height: 96,
        width: 96,
      },
    },
    fontSize72: {
      fontSize: 40,
      [theme.breakpoints.up('sm')]: {
        fontSize: 54,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 72,
      },
    },
  }),
);
