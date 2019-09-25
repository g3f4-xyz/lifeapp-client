import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { DateRange, Group, LocalOffer, Settings, Update } from '@material-ui/icons';
import classNames from 'classnames';
import React, { FC } from 'react';
import { TASK_TYPE_VALUE_MAP } from '../../../constans';
import { TaskTypeEnum } from '../../modules/TaskList/__generated__/TaskListQuery.graphql';
import useTaskTypeIconStyles from './useTaskTypeIconStyles';

const ICONS: TASK_TYPE_VALUE_MAP<React.ComponentType<SvgIconProps>> = {
  GOAL: Settings,
  TODO: LocalOffer,
  ROUTINE: Update,
  MEETING: Group,
  EVENT: DateRange,
};

export interface TaskTypeIconProps {
  className?: string;
  type: TaskTypeEnum;
}

const TaskTypeIcon: FC<TaskTypeIconProps> = props => {
  const { className, type } = props;
  const classes = useTaskTypeIconStyles();
  const Icon = ICONS[type];

  return <Icon className={classNames(classes.icon, className)} />;
};

export default TaskTypeIcon;