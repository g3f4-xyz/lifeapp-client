import { Paper, Theme, withStyles } from '@material-ui/core';
import React from 'react';
import FieldIcon from '../../display/FieldIcon';
import FieldValue from '../../display/FieldValue';
import Label from '../../display/Label';
import TaskTypeIcon from '../../display/TaskTypeIcon';

const styles = (theme: Theme) => ({
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

interface Props {
  classes: any;
  data: any;
}

class TaskDetails extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    const { taskType, fields } = this.props.data;

    return (
      <div className={classes.root}>
        <TaskTypeIcon type={taskType} />
      {[...fields]
        .sort((a, b) => a.order - b.order)
        .map(({ fieldId, format, label, type, meta, value }: any) => (
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

// @ts-ignore
export default withStyles(styles)(TaskDetails);
