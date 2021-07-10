import React, { FC } from 'react';
import { ITEMS_PER_PAGE } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskTypeListList from './list/TaskTypeListList';
import useTaskTypeQuery from './useTaskTypeListQuery';

const TaskTypeList: FC = () => {
  const { props, error } = useTaskTypeQuery({ count: ITEMS_PER_PAGE });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props && props.taskTypes) {
    return <TaskTypeListList data={props.taskTypes} />;
  }

  return <Loader />;
};

export default TaskTypeList;
