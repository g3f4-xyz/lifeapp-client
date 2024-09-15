import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { ExpandMore, PriorityHigh } from '@material-ui/icons';
import classNames from 'classnames';
import React, { FC } from 'react';
import { FIELD_ID, TaskStatusEnum } from '../../../../constans';
import StatusIcon from '../../../../display/status-icon/StatusIcon';
import TaskTypeIcon from '../../../../display/task-type-icon/TaskTypeIcon';
import { useTaskListItemFragment$key } from './__generated__/useTaskListItemFragment.graphql';
import useTaskListItemFragment from './useTaskListItemFragment';
import useTaskListItemStyles from './useTaskListItemStyles';

export interface TaskListFragmentProps {
  data: useTaskListItemFragment$key;

  onDelete(id: string): void;
  onEdit(typeId: string, taskId: string): void;
}

const TaskListItem: FC<TaskListFragmentProps> = (props) => {
  const { data, onDelete, onEdit } = props;
  const { id, typeId, fields } = useTaskListItemFragment(data);
  const titleField = fields.find((field) => field.fieldId === FIELD_ID.TITLE);
  const noteField = fields.find((field) => field.fieldId === FIELD_ID.NOTE);
  const priorityField = fields.find((field) => field.fieldId === FIELD_ID.PRIORITY);
  const statusField = fields.find((field) => field.fieldId === FIELD_ID.STATUS);
  const classes = useTaskListItemStyles();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <div>
          {statusField && statusField.value && (
            <Tooltip title={`Status: ${statusField.value.id as TaskStatusEnum}`}>
              <span ref={null}>
                <StatusIcon status={statusField.value.id as TaskStatusEnum} />
              </span>
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
      </AccordionSummary>
      <AccordionDetails className={classes.content}>
        <div>{noteField && noteField.value && noteField.value.text}</div>
        <div className={classes.actions}>
          <Button onClick={() => onEdit(typeId, id)}>Edit</Button>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default TaskListItem;
