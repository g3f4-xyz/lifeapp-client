import React, { FC } from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskListPagination from './pagination/TaskListPagination';
import useTaskListQuery from './useTaskListQuery';

export interface TaskListProps {
  path?: string;
}

const TaskList: FC<TaskListProps> = () => {
  const { props, error } = useTaskListQuery({
    count: ITEMS_PER_PAGE,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props && props.app) {
    return (
      <TaskListPagination
        data={props.app.taskList}
        settings={props.app.settings.taskList}
        settingsId={props.app.settings.id}
      />
    );
  }

  return <Loader />;
};

export default TaskList;
