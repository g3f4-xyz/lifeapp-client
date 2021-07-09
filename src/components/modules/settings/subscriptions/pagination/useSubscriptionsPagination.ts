import graphql from 'babel-plugin-relay/macro';
import { usePagination } from 'relay-hooks';
import { ConnectionConfig } from 'relay-hooks/lib/FragmentPagination';
import { PaginationFunction } from 'relay-hooks/lib/useOssFragment';
import {
  useSubscriptionsPagination,
  useSubscriptionsPagination$ref,
} from './__generated__/useSubscriptionsPagination.graphql';
import { ITEMS_PER_PAGE } from '../../../../../constans';

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
  PaginationFunction,
  'loadMore' | 'refetchConnection'
> & {
  loadMore(): void;
  refetchConnection(): void;
};

export default (
  data: useSubscriptionsPagination$ref,
  pageSize = ITEMS_PER_PAGE,
  onError?: (error: Error) => void,
): [Omit<useSubscriptionsPagination, ' $refList'>, SubscriptionPaginationFunction] => {
  const [response, { isLoading, hasMore, loadMore, refetchConnection }] = usePagination(
    query,
    data,
  );
  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }

    loadMore(connectionConfig, pageSize, onError, {});
  };
  const _refetchConnection = () => {
    if (isLoading()) {
      return;
    }

    refetchConnection(connectionConfig, pageSize, onError, {});
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
