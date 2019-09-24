import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../../environment';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Loader from '../../display/Loader';
import { TaskTypeEnum } from '../TaskList/__generated__/TaskListQuery.graphql';
import { TaskQuery } from './__generated__/TaskQuery.graphql';
import TaskFragment from './TaskFragment';

interface Props {
  isNew: boolean;
  taskId: string;
  type: TaskTypeEnum | null;
  editMode: boolean;
  onDone(taskId: string): void;
}

export default class Task extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <ErrorBoundary>
        <QueryRenderer<TaskQuery>
          environment={environment}
          variables={{
            id: this.props.taskId,
            type: this.props.type
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
          render={({ error, props }) => {
            if (error) {
              return <div>{JSON.stringify(error)}</div>;
            } else if (props && props.app.task) {
              return <TaskFragment data={props.app.task} {...this.props} taskListId={props.app.taskList.id} />;
            }
            return <Loader />;
          }}
        />
      </ErrorBoundary>
    );
  }
}
