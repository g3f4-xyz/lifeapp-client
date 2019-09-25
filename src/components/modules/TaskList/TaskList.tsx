import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { QueryRenderer } from 'react-relay';
import { ITEMS_PER_PAGE } from '../../../constans';
import environment from '../../../environment';
import Loader from '../../display/loader/Loader';
import { TaskListQuery } from './__generated__/TaskListQuery.graphql';
import { TaskListHandlerProps } from './taskListModuleHandler';
import TaskListPagination from './TaskListPagination';

const TaskList: FC<TaskListHandlerProps> = props => (
  <QueryRenderer<TaskListQuery>
    environment={environment}
    variables={{
      count: ITEMS_PER_PAGE,
    }}
    query={graphql`
      query TaskListQuery($count: Int!, $after: String) {
        app {
          taskList {
            ...TaskListPagination_data
          }
          settings {
            id
            taskList {
              filters {
                title
                taskType
                status
              }
            }
          }
        }
      }
    `}
    render={response => {
      if (response.error) {
        return <div>{JSON.stringify(response.error)}</div>;
      } else if (response.props && response.props.app) {
        return (
          <TaskListPagination
            {...props}
            data={response.props.app.taskList}
            settings={response.props.app.settings.taskList}
            settingsId={response.props.app.settings.id}
          />
        );
      }
      return <Loader />;
    }}
  />
);

export default TaskList;
