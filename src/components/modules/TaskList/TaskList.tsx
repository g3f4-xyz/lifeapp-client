// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { ITEMS_PER_PAGE } from '../../../constans';
import environment from '../../../environment';
import Loader from '../../display/Loader';
import { TaskListQuery } from './__generated__/TaskListQuery.graphql';
import { TaskListHandlerProps } from './taskListModuleHandler';
import TaskListPagination from './TaskListPagination';

export default class TaskList extends React.Component<TaskListHandlerProps> {
  render(): React.ReactNode {
    return (
      <QueryRenderer<TaskListQuery>
        environment={environment}
        variables={{
          count: ITEMS_PER_PAGE,
        }}
        query={graphql`
          query TaskListQuery(
            $count: Int!,
            $after: String
          ) {
            app {
              taskList {
                ...TaskListPagination
              }
            }
          }
        `}
        render={({ error, props }) => {
          if (error) {
            return (
              <div>{JSON.stringify(error)}</div>
            );
          } else if (props) {
            return (
              <TaskListPagination data={props.app.taskList} {...this.props} />
            );
          }
          return (
            <Loader/>
          );
        }}
      />
    );
  }
}
