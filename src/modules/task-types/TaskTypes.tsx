import React, { FC } from 'react';
import { ITEMS_PER_PAGE } from '../../constans';
import Loader from '../../display/loader/Loader';
import TaskTypeList from './list/TaskTypeList';
import useTaskTypesQuery from './useTaskTypesQuery';

const TaskTypes: FC = () => {
  const { data, error } = useTaskTypesQuery({ count: ITEMS_PER_PAGE });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (data && data.taskTypes) {
    return <TaskTypeList data={data.taskTypes} />;
  }

  return <Loader />;
};

export default TaskTypes;
