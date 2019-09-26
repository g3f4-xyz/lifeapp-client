import React, { FC } from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskListPagination from './pagination/TaskListPagination';
import { TaskListHandlerProps } from './taskListModuleHandler';
import useTaskListQuery from './useTaskListQuery';

const TaskList: FC<TaskListHandlerProps> = ownProps => {
  const { props, error } = useTaskListQuery({
    count: ITEMS_PER_PAGE,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props && props.app) {
    return (
      <TaskListPagination
        {...ownProps}
        data={props.app.taskList}
        settings={props.app.settings.taskList}
        settingsId={props.app.settings.id}
      />
    );
  }

  return <Loader />;
};

export default TaskList;
