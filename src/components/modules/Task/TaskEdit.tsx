import { IconButton, withStyles } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import React from 'react';
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
  taskType: any;
  onSave: any;
}

class TaskEdit extends React.Component<Props> {
  render() {
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
