import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Field from '../components/Field';

const styles = theme => console.log(['theme.breakpoints'], theme.breakpoints) ||({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  }
});

class Fields extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    fields: PropTypes.array,
  };

  render() {
    const { classes, fields } = this.props;
    const fieldsGroupedByOrder = fields.reduce((acc, { order, ...field }) => {
      if (!acc[order]) {
        acc[order] = [];
      }

      acc[order].push(field);

      return acc;
    }, []);
    console.log(['Fields:render:fieldsGroupedByOrder'], fieldsGroupedByOrder);

    return fieldsGroupedByOrder.map((fieldsInRow, key) => (
      <Paper className={classes.row} key={key}>
      {fieldsInRow.map(({ format, ...props }) => ({ format, props })).map((props, key) => (
        <Field key={key} {...props} />
      ))}
      </Paper>
    ));
  }
}

export default withStyles(styles)(Fields);
