import Grid from '@material-ui/core/Grid';
import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { createPaginationContainer } from 'react-relay';
import Loader from '../../display/loader/Loader';
import { TaskTypeEnum } from './__generated__/TaskTypeFragment_data.graphql';
// eslint-disable-next-line @typescript-eslint/camelcase
import { TaskTypeListPagination_data } from './__generated__/TaskTypeListPagination_data.graphql';
import TaskTypeFragment from './TaskTypeFragment';
import useTaskTypeListPaginationStyles from './useTaskTypeListPaginationStyles';

interface TaskTypeListProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: TaskTypeListPagination_data;

  onSelect(taskType: TaskTypeEnum): void;
}

const TaskTypeList: FC<TaskTypeListProps> = props => {
  const {
    data: {
      list: { edges },
    },
    onSelect,
  } = props;
  const classes = useTaskTypeListPaginationStyles();

  if (!edges) {
    return <Loader />;
  }

  return (
    <Grid className={classes.container} container>
      {[...edges]
        .map(edge => edge && edge.node)
        .sort((nodeA, nodeB) => (nodeA && nodeB ? nodeA.order - nodeB.order : 0))
        .map((data): React.ReactNode => data && <TaskTypeFragment key={data ? data.id : ''} data={data} onSelect={onSelect} />)}
    </Grid>
  );
};

export default createPaginationContainer<TaskTypeListProps>(
  TaskTypeList,
  {
    data: graphql`
      fragment TaskTypeListPagination_data on TaskTypeListType {
        id
        list(first: $count, after: $after) @connection(key: "TaskTypeList_list") {
          edges {
            node {
              id
              order
              ...TaskTypeFragment_data
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    query: graphql`
      query TaskTypeListPaginationQuery($count: Int!, $after: String) {
        app {
          taskTypeList {
            ...TaskTypeListPagination_data
          }
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.data && props.data.list;
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount,
      };
    },
    getVariables(_props, { cursor, count }) {
      return {
        count,
        after: cursor,
      };
    },
  },
);
