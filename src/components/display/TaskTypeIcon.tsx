import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { DateRange, Group, LocalOffer, Settings, Update } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import { TASK_TYPE_VALUE_MAP } from '../../constans';
import { TaskTypeEnum } from '../modules/TaskList/__generated__/TaskListQuery.graphql';

const ICONS: TASK_TYPE_VALUE_MAP<React.ComponentType<SvgIconProps>> = {
  GOAL: Settings,
  TODO: LocalOffer,
  ROUTINE: Update,
  MEETING: Group,
  EVENT: DateRange,
};

const styles = (theme: Theme) => ({
  icon: {
    fontSize: theme.spacing(3),
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  className?: string;
  type: TaskTypeEnum;
}

class TaskTypeIcon extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, className, type } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const Icon = ICONS[type];

    return <Icon className={classNames(classes.icon, className)} />;
  }
}

export default withStyles(styles)(TaskTypeIcon);
