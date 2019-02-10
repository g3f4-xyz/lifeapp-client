import { List } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { ConnectionData, createPaginationContainer } from 'react-relay';
import Loader from '../../display/Loader';
import { SubscriptionsPagination } from './__generated__/SubscriptionsPagination.graphql';
import SubscriptionFragment from './SubscriptionFragment';

interface Props {
  className?: string;
  data: SubscriptionsPagination;
  onDelete(subscriptionId: string): void;
}

class Subscriptions extends React.Component<Props> {
  render(): React.ReactNode {
    const { className, data, onDelete } = this.props;
    const { subscriptions: { edges } }  = data;

    if (!edges) {
      return (
        <Loader />
      );
    }

    return (
      <List className={className}>
      {edges.map((edge): React.ReactNode => edge && edge.node && (
        <SubscriptionFragment
          key={edge.node.id}
          data={edge.node}
          onDelete={onDelete}
        />
      ))}
      </List>
    );
  }
}

export default createPaginationContainer<Props>(
  Subscriptions,
  graphql`
    fragment SubscriptionsPagination on NotificationsType
    {
      id
      subscriptions (
        first: $count,
        after: $after,
      ) @connection(key: "Notifications_subscriptions") {
        edges {
          node {
            id
            ...SubscriptionFragment
          }
        }
      }
    }
  `,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.data && props.data.subscriptions as ConnectionData;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }) {
      return { count, cursor };
    },
    query: graphql`
      query SubscriptionsPaginationQuery (
        $count: Int!,
        $after: String,
      ) {
        app {
          settings {
            notifications {
              ...SubscriptionsPagination
            }
          }
        }
      }
    `,
  },
);
