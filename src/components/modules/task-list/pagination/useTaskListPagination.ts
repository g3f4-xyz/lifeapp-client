import graphql from 'babel-plugin-relay/macro';
import { usePagination } from 'relay-hooks';
import { ITEMS_PER_PAGE } from '../../../../constans';
import { useTaskListPagination$key } from './__generated__/useTaskListPagination.graphql';

const query = graphql`
  fragment useTaskListPagination on Query
  @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" })
  @refetchable(queryName: "TaskListPaginationRefetchQuery") {
    tasks {
      id
      list(first: $count, after: $cursor) @connection(key: "TaskConnection_list") {
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
  }
`;

export default (data: useTaskListPagination$key, pageSize = ITEMS_PER_PAGE) => {
  const { data: response, hasNext, loadNext, isLoading, refetch } = usePagination(query, data);
  const loadMore = () => {
    if (!hasNext || isLoading) {
      return;
    }

    loadNext(pageSize);
  };
  const refetchConnection = () => {
    if (isLoading) {
      return;
    }

    refetch({ count: pageSize });
  };
  const hasMore = () => hasNext;

  return {
    response,
    isLoading,
    hasMore,
    loadMore,
    refetchConnection,
  };
};
