import React from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import { TaskTypeEnum } from './fragment/__generated__/useTaskTypeFragment.graphql';
import TaskTypeListPagination from './pagination/TaskTypeListPagination';
import useTaskTypeQuery from './useTaskTypeListQuery';

export interface TaskTypeListProps {
  onSelect(taskType: TaskTypeEnum): void;
}

const TaskTypeList: React.FC<TaskTypeListProps> = appProps => {
  const { props, error } = useTaskTypeQuery({ count: ITEMS_PER_PAGE });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props) {
    return <TaskTypeListPagination data={props.app.taskTypeList} {...appProps} />;
  }

  return <Loader />;
};

export default TaskTypeList;
