import Grid from '@material-ui/core/Grid';
import React, { FC } from 'react';
import Loader from '../../display/loader/Loader';
// eslint-disable-next-line @typescript-eslint/camelcase
import { TaskTypeEnum } from './__generated__/useTaskTypeFragment.graphql';
import { useTaskTypePagination$ref } from './__generated__/useTaskTypePagination.graphql';
import TaskTypeFragment from './TaskTypeFragment';
import useTaskTypeListPaginationStyles from './useTaskTypeListPaginationStyles';
import useTaskTypePagination from './useTaskTypePagination';

interface TaskTypeListProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: useTaskTypePagination$ref;

  onSelect(taskType: TaskTypeEnum): void;
}

const TaskTypeList: FC<TaskTypeListProps> = props => {
  const { onSelect } = props;
  const classes = useTaskTypeListPaginationStyles();
  const [
    {
      list: { edges },
    },
    { isLoading },
  ] = useTaskTypePagination(props.data);

  if (isLoading()) {
    return <Loader />;
  }

  // #TODO dlaczego ta tablica jest nullowalna w schemie?
  const taskTypes = [...(edges || [])]
    .map(edge => edge && edge.node)
    .sort((nodeA, nodeB) => (nodeA && nodeB ? nodeA.order - nodeB.order : 0));

  return (
    <Grid className={classes.container} container>
      {taskTypes.map((data, index) => (
        <TaskTypeFragment key={data ? data.id : index} data={data} onSelect={onSelect} />
      ))}
    </Grid>
  );
};

export default TaskTypeList;
