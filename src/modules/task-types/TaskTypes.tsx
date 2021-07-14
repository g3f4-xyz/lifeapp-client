import React, { FC } from 'react';
import TaskTypeList from './list/TaskTypeList';
import useTaskTypesQuery from './useTaskTypesQuery';

const TaskTypes: FC = () => {
  const data = useTaskTypesQuery();

  return <TaskTypeList data={data.taskTypes} />;
};

export default TaskTypes;
