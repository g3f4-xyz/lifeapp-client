import React, { FC } from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskListPagination from './pagination/TaskListPagination';
import useTaskListQuery from './useTaskListQuery';

const TaskList: FC = () => {
  const { props, error } = useTaskListQuery({
    count: ITEMS_PER_PAGE,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props && props.tasks && props.settings && props.settings) {
    return (
      <TaskListPagination
        data={props.tasks}
        settings={props.settings.taskList}
        settingsId={props.settings.id}
      />
    );
  }

  return <Loader />;
};

export default TaskList;
