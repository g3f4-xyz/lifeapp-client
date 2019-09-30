import { CheckBox, CheckBoxOutlineBlank, Slideshow } from '@material-ui/icons';
import classNames from 'classnames';
import React, { FC, forwardRef } from 'react';
import { TASK_STATUSES } from '../../../constans';
import { TaskStatusEnum } from '../../../mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';
import useStatusIconStyles from './useStatusIconStyles';

export interface StatusIconProps {
  status: TaskStatusEnum;
}

const StatusIcon: FC<StatusIconProps> = props => {
  const { status } = props;
  const classes = useStatusIconStyles();

  switch (status) {
    case TASK_STATUSES.TODO: {
      return <CheckBoxOutlineBlank className={classNames(classes.grey, classes.icon)} />;
    }
    case TASK_STATUSES.IN_PROGRESS: {
      return <Slideshow className={classNames(classes.yellow, classes.icon)} />;
    }
    case TASK_STATUSES.DONE: {
      return <CheckBox className={classNames(classes.green, classes.icon)} />;
    }
    default: {
      throw new Error(`no status icon for status: ${status}`);
    }
  }
};

export default forwardRef(StatusIcon);
