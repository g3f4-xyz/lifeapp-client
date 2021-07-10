import { createStyles, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme: Theme) =>
  createStyles({
    accountContent: {
      display: 'flex',
      justifyContent: 'center',
    },
    subscriptionsWrapper: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    list: {
      width: '100%',
    },
    section: {
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    subscriptionButton: {
      textAlign: 'right',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
    subscriptionsPaginationExpansionPanel: {
      paddingRight: theme.spacing(1),
    },
    notificationsInfoWrapper: {
      textAlign: 'right',
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
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
