import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { DateRange, Group, LocalOffer, Settings, Update } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import { TASK_TYPES } from '../../constans';
import { TaskTypeEnum } from '../modules/Task/__generated__/TaskFragment.graphql';

const ICONS = {
  [TASK_TYPES.EVENT]: DateRange,
  [TASK_TYPES.MEETING]: Group,
  [TASK_TYPES.ROUTINE]: Update,
  [TASK_TYPES.TODO]: LocalOffer,
};

const styles = (theme: Theme) => ({
  icon: {
    fontSize: theme.spacing.unit * 3,
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

    const Icon = ICONS[type] || Settings;

    return (
      <Icon className={classNames(classes.icon, className)} />
    );
  }
}

export default withStyles(styles)(TaskTypeIcon);
