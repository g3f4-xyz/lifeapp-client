import { createStyles } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() =>
  createStyles({
    green: {
      color: green['500'],
    },
    red: {
      color: red['500'],
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    listItemIcon: {
      marginRight: 0,
    },
  }),
);
