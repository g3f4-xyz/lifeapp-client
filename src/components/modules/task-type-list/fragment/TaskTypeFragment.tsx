import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { AddCircle, InfoOutlined } from '@material-ui/icons';
import React, { ReactElement, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MODULES_IDS } from '../../../../constans';
import TaskTypeIcon from '../../../display/task-type-icon/TaskTypeIcon';
import { useTaskTypeFragment$key } from './__generated__/useTaskTypeFragment.graphql';
import useTaskTypeFragment from './useTaskTypeFragment';
import useTaskTypeFragmentStyles from './useTaskTypeFragmentStyles';

interface TaskTypeFragmentProps {
  data: useTaskTypeFragment$key;
}

export default function TaskTypeFragment(
  props: TaskTypeFragmentProps,
): ReactElement<TaskTypeFragmentProps> {
  const { data } = props;
  const classes = useTaskTypeFragmentStyles();
  const [info, setInfo] = useState(false);
  const { label, description, typeId } = useTaskTypeFragment(data);
  const history = useHistory();

  const handleAdd = useCallback(() => {
    history.push(`/app/${MODULES_IDS.TASK}/${typeId}/`);
  }, [typeId, history]);
  const handleInfo = useCallback(() => {
    setInfo((value) => !value);
  }, [setInfo]);

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
        <IconButton className={classes.addButton} onClick={handleAdd}>
          <AddCircle className={classes.fontSize72} />
        </IconButton>
      </div>
    </Grid>
  );
}
