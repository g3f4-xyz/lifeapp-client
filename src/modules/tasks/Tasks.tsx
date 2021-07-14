import React from 'react';
import { ITEMS_PER_PAGE } from '../../constans';
import Loader from '../../display/loader/Loader';
import TaskList from './list/TaskList';
import useTasksQuery from './useTasksQuery';

export default function Tasks() {
  const { data, isLoading } = useTasksQuery({
    count: ITEMS_PER_PAGE,
  });

  if (isLoading || !data) {
    return <Loader />;
  }

  return <TaskList data={data} />;
}
