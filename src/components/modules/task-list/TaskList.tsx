import React from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskListPagination from './pagination/TaskListPagination';
import useTaskListQuery from './useTaskListQuery';

export default function TaskList() {
  const { data, error } = useTaskListQuery({
    count: ITEMS_PER_PAGE,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (data && data.settings && data.settings) {
    return (
      <TaskListPagination
        data={data}
        settings={data.settings.taskList}
        settingsId={data.settings.id}
      />
    );
  }

  return <Loader />;
}
