import { StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { DateRange, Group, LocalOffer, Settings, Update } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import { TASK_TYPES } from '../../constans';
import { TaskTypeEnum } from '../modules/TaskList/__generated__/TaskListFragment.graphql';

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

    switch (type) {
      case TASK_TYPES.EVENT: {
        return <DateRange className={classNames(classes.icon, className)} />;
      }
      case TASK_TYPES.MEETING: {
        return <Group className={classNames(classes.icon, className)} />;
      }
      case TASK_TYPES.ROUTINE: {
        return <Update className={classNames(classes.icon, className)} />;
      }
      case TASK_TYPES.TODO: {
        return <LocalOffer className={classNames(classes.icon, className)} />;
      }
    }

    return (
      <Settings className={classNames(classes.icon, className)} />
    );
  }
}

export default withStyles(styles)(TaskTypeIcon);
