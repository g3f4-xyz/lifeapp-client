import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../display/loader/Loader';
import TaskFragment from './fragment/TaskFragment';
import useTaskQuery from './useTaskQuery';

const Task: FC = () => {
  const params = useParams();
  const firstParam = params[0];

  const [taskType, taskId] = firstParam ? firstParam.split('/') : [];
  const { props, error } = useTaskQuery({
    id: taskId,
    type: taskType,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props && props.app.task) {
    return <TaskFragment data={props.app.task} />;
  }

  return <Loader />;
};

export default Task;
