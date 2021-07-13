import React, { FC } from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskTypeListList from './list/TaskTypeListList';
import useTaskTypeQuery from './useTaskTypeListQuery';

const TaskTypeList: FC = () => {
  const { data, error } = useTaskTypeQuery({ count: ITEMS_PER_PAGE });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (data && data.taskTypes) {
    return <TaskTypeListList data={data.taskTypes} />;
  }

  return <Loader />;
};

export default TaskTypeList;
