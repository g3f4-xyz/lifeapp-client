import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Done } from '@material-ui/icons';
import React, { FC, Fragment, useCallback } from 'react';
import { useHistory } from 'react-router';
import { MODULES_IDS } from '../../../../constans';
import Loader from '../../../display/loader/Loader';
import TaskTypeFragment from '../fragment/TaskTypeFragment';
import { useTaskTypePagination$ref } from './__generated__/useTaskTypePagination.graphql';
import useTaskTypeListPaginationStyles from './useTaskTypeListPaginationStyles';
import useTaskTypePagination from './useTaskTypePagination';

interface TaskTypeListProps {
  data: useTaskTypePagination$ref;
}

const TaskTypeList: FC<TaskTypeListProps> = props => {
  const classes = useTaskTypeListPaginationStyles();
  const [
    {
      list: { edges },
    },
    { isLoading },
  ] = useTaskTypePagination(props.data);
  const history = useHistory();

  const handleDone = useCallback(() => {
    history.push(`/${MODULES_IDS.TASK_LIST}`);
  }, [history]);

  if (isLoading()) {
    return <Loader />;
  }

  // #TODO dlaczego ta tablica jest nullowalna w schemie?
  const taskTypes = [...(edges || [])]
    .map(edge => edge && edge.node)
    .sort((nodeA, nodeB) => (nodeA && nodeB ? nodeA.order - nodeB.order : 0));

  return (
    <Fragment>
      <Grid className={classes.container} container>
        {taskTypes.map((data, index) => (
          <TaskTypeFragment key={data ? data.id : index} data={data} />
        ))}
      </Grid>
      <IconButton className={classes.doneButton} color="primary" onClick={handleDone}>
        <Done className={classes.doneButtonIcon} />
      </IconButton>
    </Fragment>
  );
};

export default TaskTypeList;
