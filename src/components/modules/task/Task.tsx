import React from 'react';
import { TaskTypeEnum } from '../../../constans';
import Loader from '../../display/loader/Loader';
import TaskFragment from './fragment/TaskFragment';
import useTaskQuery from './useTaskQuery';

interface TaskProps {
  isNew: boolean;
  taskId: string;
  type: TaskTypeEnum | null;
  editMode: boolean;

  onDone(taskId: string): void;
}

const Task: React.FC<TaskProps> = ownProps => {
  const { props, error } = useTaskQuery({
    id: ownProps.taskId,
    type: ownProps.type,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (props && props.app.task) {
    return (
      <TaskFragment
        taskListId={props.app.taskList.id}
        data={props.app.task}
        {...ownProps}
      />
    );
  }

  return <Loader />;
};

export default Task;
