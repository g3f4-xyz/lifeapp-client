import React from 'react';
import TaskList from './list/TaskList';
import useTasksQuery from './useTasksQuery';

export default function Tasks() {
  const data = useTasksQuery();

  return <TaskList data={data} />;
}
