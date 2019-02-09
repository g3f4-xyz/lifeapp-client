import { Theme, withStyles } from '@material-ui/core';
import { DateRange, Group, LocalOffer, Settings, Update } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import { TASK_TYPES } from '../../constans';

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

interface Props {
  classes?: any;
  className?: any;
  type: any;
}

class TaskTypeIcon extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, className, type } = this.props;
    const Icon = ICONS[type] || Settings;

    return (
      <Icon className={classNames(classes.icon, className)} />
    );
  }
}

export default withStyles(styles)(TaskTypeIcon);
