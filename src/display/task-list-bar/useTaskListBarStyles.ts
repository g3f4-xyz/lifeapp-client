import { createStyles, Theme } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginRight: theme.spacing(2),
    },
    grow: {
      flexGrow: 1,
    },
    statusFilter: {
      marginBottom: theme.spacing(3),
      marginRight: theme.spacing(2),
      minWidth: theme.spacing(20),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(10),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    wrapper: {
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row-reverse',
      },
    },
    toolbar: {
      overflow: 'scroll',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }),
);
