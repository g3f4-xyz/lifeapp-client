// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../../environment';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Loader from '../../display/Loader';
import TaskTypeListPagination from './TaskTypeListPagination';

interface Props {
  onSelect: any;
}

export default class TaskTypeListQuery extends React.Component<Props> {
  render() {
    return (
      <ErrorBoundary>
        <QueryRenderer
          environment={environment}
          variables={{}}
          query={graphql`
            query TaskTypeListQuery {
              app {
                taskTypeList {
                  ...TaskTypeListPagination
                }
              }
            }
          `}
          render={({ error, props }) => {
            if (error) {
              return <div>{JSON.stringify(error)}</div>;
            } else if (props) {
              return (
                <TaskTypeListPagination data={props.app.taskTypeList} {...this.props} />
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
