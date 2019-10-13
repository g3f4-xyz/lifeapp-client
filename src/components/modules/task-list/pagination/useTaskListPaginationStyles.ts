import { createStyles } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() =>
  createStyles({
    addButton: {
      zIndex: 9,
      position: 'fixed',
      bottom: 20,
      left: 20,
    },
    addButtonIcon: {
      fontSize: 72,
    },
    moreButton: {
      zIndex: 9,
      position: 'fixed',
      bottom: 20,
      right: 20,
    },
    moreButtonIcon: {
      fontSize: 72,
    },
    listLoader: {
      marginTop: 20,
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
