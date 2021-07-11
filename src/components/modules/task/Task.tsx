import React, { useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TaskTypeEnum } from '../../../constans';
import AppContext from '../../AppContext';
import Loader from '../../display/loader/Loader';
import TaskFragment from './fragment/TaskFragment';
import useTaskQuery from './useTaskQuery';

export interface TaskProps {
  taskId?: string;
  taskType?: TaskTypeEnum;
}

export default function Task(ownProps: TaskProps) {
  const params = useParams();
  const { addTaskParam } = useContext(AppContext);
  const firstParam = params[0];

  const [taskType, taskId] = firstParam ? firstParam.split('/') : [];
  const { data, error } = useTaskQuery({
    id: ownProps.taskId || taskId.length > 0 ? taskId : null,
    typeId: ownProps.taskType || taskType
  });

  const saveParams = useCallback(() => {
    addTaskParam({
      taskId,
      taskType
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
  } else if (data && data.task) {
    return <TaskFragment data={data.task} />;
  }

  return <Loader />;
}
