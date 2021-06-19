import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { ExpandMore, PriorityHigh } from '@material-ui/icons';
import classNames from 'classnames';
import React, { FC } from 'react';
import { FIELD_ID, TaskTypeEnum } from '../../../../constans';
import { TaskStatus } from '../../../../mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';
import StatusIcon from '../../../display/status-icon/StatusIcon';
import TaskTypeIcon from '../../../display/task-type-icon/TaskTypeIcon';
import { useTaskListFragment$ref } from './__generated__/useTaskListFragment.graphql';
import useTaskListFragment from './useTaskListFragment';
import useTaskListFragmentStyles from './useTaskListFragmentStyles';

export interface TaskListFragmentProps {
  data: useTaskListFragment$ref;

  onDelete(id: string): void;
  onEdit(typeId: TaskTypeEnum, taskId: string): void;
}

const TaskListFragment: FC<TaskListFragmentProps> = props => {
  const { data, onDelete, onEdit } = props;
  const { id, typeId, fields } = useTaskListFragment(data);
  const titleField = fields.find(field => field.fieldId === FIELD_ID.TITLE);
  const noteField = fields.find(field => field.fieldId === FIELD_ID.NOTE);
  const priorityField = fields.find(field => field.fieldId === FIELD_ID.PRIORITY);
  const statusField = fields.find(field => field.fieldId === FIELD_ID.STATUS);
  const classes = useTaskListFragmentStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <div>
          {statusField && statusField.value && (
            <Tooltip title={`Status: ${statusField.value.id as TaskStatus}`}>
              <StatusIcon status={statusField.value.id as TaskStatus} />
            </Tooltip>
          )}
          {priorityField && priorityField.value && priorityField.value.enabled && (
            <Tooltip title="Important!">
              <PriorityHigh className={classNames(classes.red, classes.icon)} />
            </Tooltip>
          )}
        </div>
        <Typography className={classes.heading}>
          {titleField && titleField.value && titleField.value.text}
        </Typography>
        <TaskTypeIcon type={typeId} className={classes.taskTypeIcon} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.content}>
        <div>{noteField && noteField.value && noteField.value.text}</div>
        <div className={classes.actions}>
          <Button onClick={() => onEdit(typeId, id)}>Edit</Button>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default TaskListFragment;
