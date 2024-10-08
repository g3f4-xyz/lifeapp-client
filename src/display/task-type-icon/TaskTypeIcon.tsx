import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { DateRange, Group, LocalOffer, Settings, Update } from '@material-ui/icons';
import classNames from 'classnames';
import React, { FC } from 'react';
import useTaskTypeIconStyles from './useTaskTypeIconStyles';

const predefinedTaskTypeIcons: Record<string, React.ComponentType<SvgIconProps>> = {
  GOAL: Settings,
  TODO: LocalOffer,
  ROUTINE: Update,
  MEETING: Group,
  EVENT: DateRange,
};

export interface TaskTypeIconProps {
  className?: string;
  type: string | null;
}

const TaskTypeIcon: FC<TaskTypeIconProps> = (props) => {
  const { className, type } = props;
  const classes = useTaskTypeIconStyles();
  const Icon = type ? predefinedTaskTypeIcons[type] : null;

  if (Icon === null) {
    return null;
  }

  return <Icon className={classNames(classes.icon, className)} />;
};

export default TaskTypeIcon;
