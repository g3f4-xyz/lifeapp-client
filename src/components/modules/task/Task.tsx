import React, { FC, useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TaskTypeEnum } from '../../../constans';
import AppContext from '../../AppContext';
import Loader from '../../display/loader/Loader';
import TaskFragment from './fragment/TaskFragment';
import useTaskQuery from './useTaskQuery';

export interface TaskProps {
  taskId?: string;
  taskType?: TaskTypeEnum;
  path?: string;
}

const Task: FC<TaskProps> = ownProps => {
  const params = useParams();
  const { addTaskParam } = useContext(AppContext);
  const firstParam = params[0];

  const [taskType, taskId] = firstParam ? firstParam.split('/') : [];
  const { props, error } = useTaskQuery({
    id: ownProps.taskId || taskId,
    type: ownProps.taskType || taskType,
  });

  const saveParams = useCallback(() => {
    addTaskParam({
      taskId,
      taskType,
    });
  }, [addTaskParam, taskId, taskType]);

  useEffect(() => {
    const ownParamsDefined =
      typeof ownProps.taskId === 'string' &&
      typeof ownProps.taskType === 'string' &&
      ownProps.taskType.length > 0;

    if (!ownParamsDefined) {
      saveParams();
    }
  }, [saveParams, ownProps]);

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props && props.app.task) {
    return <TaskFragment data={props.app.task} />;
  }

  return <Loader />;
};

export default Task;
