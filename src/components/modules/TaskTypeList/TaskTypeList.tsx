import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { ITEMS_PER_PAGE } from '../../../constans';
import environment from '../../../environment';
import Loader from '../../display/loader/Loader';
import { TaskTypeEnum } from './__generated__/TaskTypeFragment_data.graphql';
import { TaskTypeListQuery } from './__generated__/TaskTypeListQuery.graphql';
import TaskTypeListPagination from './TaskTypeListPagination';

export interface TaskTypeListProps {
  onSelect(taskType: TaskTypeEnum): void;
}

const TaskTypeList: React.FC<TaskTypeListProps> = props => (
  <QueryRenderer<TaskTypeListQuery>
    environment={environment}
    variables={{
      count: ITEMS_PER_PAGE,
    }}
    query={graphql`
      query TaskTypeListQuery($count: Int!, $after: String) {
        app {
          taskTypeList {
            ...TaskTypeListPagination_data
          }
        }
      }
    `}
    render={response => {
      if (response.error) {
        return <div>{JSON.stringify(response.error)}</div>;
      } else if (response.props) {
        return <TaskTypeListPagination data={response.props.app.taskTypeList} {...props} />;
      }

      return <Loader />;
    }}
  />
);

export default TaskTypeList;
