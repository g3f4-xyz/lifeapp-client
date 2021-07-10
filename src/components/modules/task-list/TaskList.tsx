import React from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskListPagination from './pagination/TaskListPagination';
import useTaskListQuery from './useTaskListQuery';

export default function TaskList() {
  const { props, error } = useTaskListQuery({
    count: ITEMS_PER_PAGE,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props && props.settings && props.settings) {
    return (
      <TaskListPagination
        data={props}
        settings={props.settings.taskList}
        settingsId={props.settings.id}
      />
    );
  }

  return <Loader />;
}
