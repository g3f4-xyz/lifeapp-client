// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { TASK_TYPE } from '../../../constans';
import environment from '../../../environment';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Loader from '../../display/Loader';
import { TaskQuery as ITaskQuery } from './__generated__/TaskQuery.graphql';
import TaskFragment from './TaskFragment';

interface Props {
  isNew: boolean;
  taskId: string;
  type: TASK_TYPE;
  editMode: boolean;
  onSaveDone(): void;
}

export default class TaskQuery extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <ErrorBoundary>
        <QueryRenderer<ITaskQuery>
          environment={environment}
          query={graphql`
            query TaskQuery (
              $id: ID
              $type: String
            ) {
              app {
                task (id: $id type: $type) {
                  id
                  ...TaskFragment
                }
                taskList {
                  id
                }
              }
            }
          `}
          variables={{
            id: this.props.isNew ? '' : this.props.taskId,
            type: this.props.type,
          }}
          render={({ error, props }) => {
            if (error) {
              return <div>{JSON.stringify(error)}</div>;
            } else if (props && props.app.task) {
              return (
                <TaskFragment data={props.app.task} {...this.props} taskListId={props.app.taskList.id} />
              );
            }
            return (
              <Loader/>
            );
          }}
        />
      </ErrorBoundary>
    );
  }
}
