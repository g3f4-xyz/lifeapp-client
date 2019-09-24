import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { ITEMS_PER_PAGE } from '../../../constans';
import environment from '../../../environment';
import Loader from '../../display/Loader';
import { TaskTypeEnum } from './__generated__/TaskTypeFragment_data.graphql';
import { TaskTypeListQuery } from './__generated__/TaskTypeListQuery.graphql';
import TaskTypeListPagination from './TaskTypeListPagination';

interface Props {
  onSelect(taskType: TaskTypeEnum): void;
}

export default class TaskTypeList extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <QueryRenderer<TaskTypeListQuery>
        environment={environment}
        variables={{
          count: ITEMS_PER_PAGE
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
        render={({ error, props }) => {
          if (error) {
            return <div>{JSON.stringify(error)}</div>;
          } else if (props) {
            return <TaskTypeListPagination data={props.app.taskTypeList} {...this.props} />;
          }
          return <Loader />;
        }}
      />
    );
  }
}
