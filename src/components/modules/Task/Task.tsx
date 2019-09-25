import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../../environment';
import ErrorBoundary from '../../containers/error-boundary/ErrorBoundary';
import Loader from '../../display/loader/Loader';
import { TaskTypeEnum } from '../TaskList/__generated__/TaskListQuery.graphql';
import { TaskQuery } from './__generated__/TaskQuery.graphql';
import TaskFragment from './TaskFragment';

interface TaskProps {
  isNew: boolean;
  taskId: string;
  type: TaskTypeEnum | null;
  editMode: boolean;

  onDone(taskId: string): void;
}

const Task: FC<TaskProps> = props => (
  <ErrorBoundary>
    <QueryRenderer<TaskQuery>
      environment={environment}
      variables={{
        id: props.taskId,
        type: props.type,
      }}
      query={graphql`
        query TaskQuery($id: ID, $type: String) {
          app {
            task(id: $id, type: $type) {
              id
              ...TaskFragment_data
            }
            taskList {
              id
            }
          }
        }
      `}
      render={response => {
        if (response.error) {
          return <div>{JSON.stringify(response.error)}</div>;
        } else if (response.props && response.props.app.task) {
          return <TaskFragment data={response.props.app.task} {...props} taskListId={response.props.app.taskList.id} />;
        }
        return <Loader />;
      }}
    />
  </ErrorBoundary>
);

export default Task;
