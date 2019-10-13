import React, { FC } from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskTypeListPagination from './pagination/TaskTypeListPagination';
import useTaskTypeQuery from './useTaskTypeListQuery';

export interface TaskTypeListProps {
  path?: string;
  static?: boolean;
}

const TaskTypeList: FC<TaskTypeListProps> = () => {
  const { props, error } = useTaskTypeQuery({ count: ITEMS_PER_PAGE });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props) {
    return <TaskTypeListPagination data={props.app.taskTypeList} />;
  }

  return <Loader />;
};

export default TaskTypeList;
