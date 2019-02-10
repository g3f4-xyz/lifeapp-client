import { StyledComponentProps, withStyles } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { ConnectionData, createPaginationContainer } from 'react-relay';
import Loader from '../../display/Loader';
import { TaskTypeEnum } from '../Task/__generated__/TaskFragment.graphql';
import { TaskTypeListPagination } from './__generated__/TaskTypeListPagination.graphql';
import TaskTypeFragment from './TaskTypeFragment';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

interface Props extends StyledComponentProps<keyof typeof styles> {
  data: TaskTypeListPagination;
  onSelect(taskType: TaskTypeEnum): void;
}

class TaskTypeList extends React.Component<Props> {
  render(): React.ReactNode {
    const { classes, data: { list: { edges } }, onSelect } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    if (!edges) {
      return (
        <Loader />
      );
    }

    return (
      <div className={classes.container}>
        {[...edges]
          .map((edge) => edge && edge.node)
          .sort((nodeA, nodeB) => nodeA && nodeB ? nodeA.order - nodeB.order : 0)
          .map((data): React.ReactNode => data && (
            <TaskTypeFragment key={data ? data.id : ''} data={data} onSelect={onSelect} />
          ))}
      </div>
    );
  }
}

export default createPaginationContainer<Props>(
  // @ts-ignore
  withStyles(styles)(TaskTypeList),
  graphql`
    fragment TaskTypeListPagination on TaskTypeListType {
      id
      list(
        first: $count,
        after: $after,
      ) @connection(key: "TaskTypeList_list") {
        edges {
          node {
            id
            order
            ...TaskTypeFragment
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
  {
    direction: 'forward',
    query: graphql`
      query TaskTypeListPaginationQuery(
        $count: Int!,
        $after: String,
      ) {
        app {
          taskTypeList {
            ...TaskTypeListPagination
          }
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.data && props.data.list as ConnectionData;
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount,
      };
    },
    getVariables(props, { cursor, count }) {
      return {
        count,
        after: cursor,
      };
    },
  },
);
