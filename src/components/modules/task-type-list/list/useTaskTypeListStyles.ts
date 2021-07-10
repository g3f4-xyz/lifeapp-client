import { createStyles } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() =>
  createStyles({
    container: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
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
