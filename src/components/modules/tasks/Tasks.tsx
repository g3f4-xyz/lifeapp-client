import React from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import TaskList from './list/TaskList';
import useTasksQuery from './useTasksQuery';

export default function Tasks() {
  const data = useTasksQuery({
    count: ITEMS_PER_PAGE,
  });

  return <TaskList data={data} />;
}
