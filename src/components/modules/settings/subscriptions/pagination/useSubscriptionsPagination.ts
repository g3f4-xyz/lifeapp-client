import graphql from 'babel-plugin-relay/macro';
import { ConnectionConfig, PaginationFunction, usePagination } from 'relay-hooks';
import { ITEMS_PER_PAGE } from '../../../../../constans';
import {
  useSubscriptionsPagination,
  useSubscriptionsPagination$key,
} from './__generated__/useSubscriptionsPagination.graphql';

const query = graphql`
  fragment useSubscriptionsPagination on NotificationsSettings {
    subscriptions(first: $count, after: $after) @connection(key: "Notifications_subscriptions") {
      edges {
        node {
          id
          ...useSubscriptionFragment
        }
      }
    }
  }
`;

// edges {
//   cursor
//   node {
//     id
//   ...useSubscriptionFragment
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
    query useSubscriptionsPaginationQuery($count: Int!, $after: String) {
      settings {
        notifications {
          ...useSubscriptionsPagination
        }
      }
    }
  `,
};

export type SubscriptionPaginationFunction = Omit<
  PaginationFunction<useSubscriptionsPagination>,
  'loadMore' | 'refetchConnection'
> & {
  loadMore(): void;
  refetchConnection(): void;
};

export default (
  data: useSubscriptionsPagination$key,
  pageSize = ITEMS_PER_PAGE,
): [Omit<useSubscriptionsPagination, ' $refList'>, SubscriptionPaginationFunction] => {
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
