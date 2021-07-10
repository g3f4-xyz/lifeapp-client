import graphql from 'babel-plugin-relay/macro';
import { ConnectionConfig, PaginationFunction, usePagination } from 'relay-hooks';
import { ITEMS_PER_PAGE } from '../../../../constans';
import {
  useTaskListPagination,
  useTaskListPagination$key,
} from './__generated__/useTaskListPagination.graphql';

const query = graphql`
  fragment useTaskListPagination on Tasks {
    id
    list(first: $count, after: $after) @connection(key: "TaskConnection_list") {
      edges {
        cursor
        node {
          id
          ...useTaskListFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

// edges {
//   cursor
//   node {
//     id
//   ...useTaskListFragment
//   }
// }
// pageInfo {
//   hasNextPage
//   endCursor
// }

const connectionConfig: ConnectionConfig = {
  getVariables(_props, { cursor, count }) {
    return {
      count,
      after: cursor,
    };
  },
  query: graphql`
    # Pagination query to be fetched upon calling 'loadMore'.
    # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
    query useTaskListPaginationQuery($count: Int!, $after: String) {
      tasks {
        ...useTaskListPagination
      }
    }
  `,
};

export type TaskListPaginationFunction = Omit<
  PaginationFunction<useTaskListPagination>,
  'loadMore' | 'refetchConnection'
> & {
  loadMore(): void;
  refetchConnection(): void;
};

export default (
  data: useTaskListPagination$key,
  pageSize = ITEMS_PER_PAGE,
): [Omit<useTaskListPagination, ' $refList'>, TaskListPaginationFunction] => {
  const [response, { isLoading, hasMore, loadMore, refetchConnection }] = usePagination(
    query,
    data,
  );
  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }

    loadMore(connectionConfig, pageSize);
  };
  const _refetchConnection = () => {
    if (isLoading()) {
      return;
    }

    refetchConnection(connectionConfig, pageSize);
  };

  return [
    response,
    {
      isLoading,
      hasMore,
      loadMore: _loadMore,
      refetchConnection: _refetchConnection,
    },
  ];
};
