import { Paper, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';
import FieldIcon from '../../display/FieldIcon';
import FieldValue from '../../display/FieldValue';
import Label from '../../display/Label';
import Loader from '../../display/Loader';
import TaskTypeIcon from '../../display/TaskTypeIcon';
import { TaskFragment as TaskFragmentResponse } from './__generated__/TaskFragment.graphql';

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

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  data: TaskFragmentResponse;
}

class TaskDetails extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes } = this.props;
    const { taskType, fields } = this.props.data;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    if (!fields) {
      return (
        <Loader />
      );
    }

    return (
      <div>
        <TaskTypeIcon type={taskType} />
      {[...fields]
        .sort((a, b) => a && b && a.order && b.order ? a.order - b.order : 0)
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

// @ts-ignore
export default withStyles(styles)(TaskDetails);
