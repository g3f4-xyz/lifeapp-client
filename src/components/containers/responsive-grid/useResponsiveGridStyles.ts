import { createStyles } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() =>
  createStyles({
    remove: {
      position: 'absolute',
      right: 0,
      top: 0,
      cursor: 'pointer',
    },
    zoom: {
      position: 'absolute',
      top: 0,
      cursor: 'pointer',
    },
  }),
);
