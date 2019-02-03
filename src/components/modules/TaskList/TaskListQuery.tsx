// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../../environment';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Loader from '../../display/Loader';
import TaskListPagination from './TaskListPagination';

interface Props {
  pageSize: any;
  onAdd: any;
  onDetails: any;
  onEdit: any;
  onMore: any;
}

export default class TaskListQuery extends React.Component<Props> {
  render() {
    return (
      <ErrorBoundary>
        <QueryRenderer
          environment={environment}
          variables={{}}
          query={graphql`
            query TaskListQuery {
              app {
                taskList {
                  ...TaskListPagination
                }
              }
            }
          `}
          render={({ error, props }) => {
            if (error) {
              return <div>{JSON.stringify(error)}</div>;
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
      </ErrorBoundary>
    );
  }
}
