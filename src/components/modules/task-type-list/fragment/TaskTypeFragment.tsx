import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { AddCircle, InfoOutlined } from '@material-ui/icons';
import React, { FC, useState } from 'react';
import { TaskTypeEnum } from '../../../../constans';
import TaskTypeIcon from '../../../display/task-type-icon/TaskTypeIcon';
import { useTaskTypePagination$ref } from '../pagination/__generated__/useTaskTypePagination.graphql';
import useTaskTypeFragment from './useTaskTypeFragment';
import useTaskTypeFragmentStyles from './useTaskTypeFragmentStyles';

interface TaskTypeFragmentProps {
  data: useTaskTypePagination$ref;

  onSelect(taskType: TaskTypeEnum): void;
}

const TaskTypeFragment: FC<TaskTypeFragmentProps> = props => {
  const { data, onSelect } = props;
  const [info, setInfo] = useState(false);
  const classes = useTaskTypeFragmentStyles();
  const { label, description, typeId } = useTaskTypeFragment(data);

  const handleInfo = () => {
    setInfo(value => !value);
  };

  return (
    <Grid className={classes.container} item>
      <h1 className={classes.nameContainer}>{label}</h1>
      <div className={classes.descContainer}>
        {info ? (
          <h3 className={classes.descText}>{description}</h3>
        ) : (
          <TaskTypeIcon type={typeId} className={classes.icon} />
        )}
      </div>
      <div className={classes.actionsContainer}>
        <IconButton className={classes.infoButton} onClick={handleInfo}>
          <InfoOutlined className={classes.fontSize72} />
        </IconButton>
        <IconButton className={classes.addButton} onClick={() => onSelect(typeId)}>
          <AddCircle className={classes.fontSize72} />
        </IconButton>
      </div>
    </Grid>
  );
};

export default TaskTypeFragment;
