import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { ExpandMore, PriorityHigh } from '@material-ui/icons';
import graphql from 'babel-plugin-relay/macro';
import classNames from 'classnames';
import React, { FC } from 'react';
import { createFragmentContainer } from 'react-relay';
import { FIELD_ID } from '../../../constans';
import { TaskStatusEnum } from '../../../mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';
import StatusIcon from '../../display/status-icon/StatusIcon';
import TaskTypeIcon from '../../display/task-type-icon/TaskTypeIcon';
import { TaskListFragment_data as TaskListFragmentResponse } from './__generated__/TaskListFragment_data.graphql';
import useTaskListFragmentStyles from './useTaskListFragmentStyles';

export interface TaskListFragmentProps {
  data: TaskListFragmentResponse;

  onDelete(id: string): void;
  onEdit(id: string): void;
}

const TaskListFragment: FC<TaskListFragmentProps> = props => {
  const { data, onDelete, onEdit } = props;
  const { id, taskType, fields } = data;
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
            <Tooltip title={`Status: ${statusField.value.id as TaskStatusEnum}`}>
              <StatusIcon status={statusField.value.id as TaskStatusEnum} />
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
        <TaskTypeIcon type={taskType} className={classes.taskTypeIcon} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.content}>
        <div>{noteField && noteField.value && noteField.value.text}</div>
        <div className={classes.actions}>
          <Button onClick={() => onEdit(id)}>Edit</Button>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default createFragmentContainer<TaskListFragmentProps>(TaskListFragment, {
  data: graphql`
    fragment TaskListFragment_data on TaskType {
      id
      taskType
      fields {
        ...SliderFieldFragment_data @relay(mask: false)
        ...SwitchFieldFragment_data @relay(mask: false)
        ...ChoiceFieldFragment_data @relay(mask: false)
        ...TextFieldFragment_data @relay(mask: false)
        ...NestedFieldFragment_data @relay(mask: false)
      }
    }
  `,
});
