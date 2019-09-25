import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { AddCircle, InfoOutlined } from '@material-ui/icons';
import graphql from 'babel-plugin-relay/macro';
import React, { FC, useState } from 'react';
import { createFragmentContainer } from 'react-relay';
import TaskTypeIcon from '../../display/task-type-icon/TaskTypeIcon';
// eslint-disable-next-line @typescript-eslint/camelcase
import { TaskTypeEnum, TaskTypeFragment_data } from './__generated__/TaskTypeFragment_data.graphql';
import useTaskTypeFragmentStyles from './useTaskTypeFragmentStyles';

interface TaskTypeProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: TaskTypeFragment_data;

  onSelect(taskType: TaskTypeEnum): void;
}

const TaskType: FC<TaskTypeProps> = props => {
  const { data, onSelect } = props;
  const [info, setInfo] = useState(false);
  const { label, description, typeId } = data;
  const classes = useTaskTypeFragmentStyles();

  const handleInfo = () => {
    setInfo(value => !value);
  };

  return (
    <Grid className={classes.container} item>
      <h1 className={classes.nameContainer}>{label}</h1>
      <div className={classes.descContainer}>
        {info ? <h3 className={classes.descText}>{description}</h3> : <TaskTypeIcon type={typeId} className={classes.icon} />}
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

export default createFragmentContainer<TaskTypeProps>(TaskType, {
  data: graphql`
    fragment TaskTypeFragment_data on TaskTypeType {
      id
      typeId
      label
      description
    }
  `,
});
