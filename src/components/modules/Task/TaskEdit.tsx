import { IconButton, withStyles } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import React from 'react';
import { TASK_TYPE } from '../../../constans';
import Fields from '../../containers/Fields';
import TaskTypeIcon from '../../display/TaskTypeIcon';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
    minHeight: 50,
  },
  addButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 72,
    width: 72,
  },
  addButtonIcon: {
    color: '#8BC34A',
    fontSize: 72,
  },
};

interface Props {
  classes?: any;
  fields: any;
  taskType: TASK_TYPE;
  onSave(): void;
}

class TaskEdit extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, fields, taskType, onSave } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          className={classes.addButton}
          color="primary"
          onClick={onSave}
        >
          <CheckCircle className={classes.addButtonIcon} />
        </IconButton>
        <TaskTypeIcon type={taskType} />
        <Fields fields={fields} />
      </div>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(TaskEdit);
