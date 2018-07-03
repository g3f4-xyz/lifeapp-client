import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FieldIcon, FieldValue, Label } from '../../display';

const styles = theme => ({
  label: {
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 10,
  },
  value: {
    padding: theme.spacing.unit * 2,
  },
  valueContainer: {
    width: '80%',
    textAlign: 'right',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit,
    alignItems: 'center',
  },
});

class TaskDetails extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
  };

  render() {
    console.log(['TaskDetails:render'], this.props);
    const { classes } = this.props;
    const { taskType, fields } = this.props.data;

    return (
      <div className={classes.root}>
        <h1>{taskType}</h1>
      {fields
        .map(item => item) // propsy są immutable, sortowanie modyfikuje oryginalną tablicę
        .sort((a, b) => a.order - b.order)
        .map(({ fieldId, format, label, type, meta, value }) => (
        <div key={fieldId}>
          <Paper className={classes.row}>
            <FieldIcon fieldId={fieldId} />
            <Label className={classes.label} class>{label}</Label>
            <FieldValue format={format} meta={meta} value={value} />
          </Paper>
        </div>
      ))}
      </div>
    );
  }
}

export default withStyles(styles)(TaskDetails);
