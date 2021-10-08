import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Done } from '@material-ui/icons';
import React, { Fragment, useCallback } from 'react';
import { useHistory } from 'react-router';
import { MODULES_IDS } from '../../../constans';
import { useTaskTypeListFragment$key } from './__generated__/useTaskTypeListFragment.graphql';
import useTaskTypeListFragment from './useTaskTypeListFragment';
import useTaskTypeListStyles from './useTaskTypeListStyles';
import TaskTypeItem from './item/TaskTypeItem';

interface TaskTypeListProps {
  data: useTaskTypeListFragment$key;
}

export default function TaskTypeList(props: TaskTypeListProps) {
  const classes = useTaskTypeListStyles();
  const { list } = useTaskTypeListFragment(props.data);
  const history = useHistory();
  const handleDone = useCallback(() => {
    history.push(`/app/${MODULES_IDS.TASK_LIST}`);
  }, [history]);

  return (
    <Fragment>
      <Grid className={classes.container} container>
        {list.map(
          (data, index) => data && <TaskTypeItem key={data ? data.typeId : index} data={data} />,
        )}
      </Grid>
      <IconButton className={classes.doneButton} color="primary" onClick={handleDone}>
        <Done className={classes.doneButtonIcon} />
      </IconButton>
    </Fragment>
  );
}
