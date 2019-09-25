import { List } from '@material-ui/core';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createPaginationContainer, RelayPaginationProp } from 'react-relay';
import Loader from '../../display/Loader';
// eslint-disable-next-line @typescript-eslint/camelcase
import { SubscriptionsPagination_data } from './__generated__/SubscriptionsPagination_data.graphql';
import SubscriptionFragment from './SubscriptionFragment';

interface Props {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: SubscriptionsPagination_data;
  relay: RelayPaginationProp;

  onDelete(subscriptionId: string): void;
}

class Subscriptions extends React.Component<Props> {
  render(): React.ReactNode {
    const { className, data, onDelete } = this.props;
    const {
      subscriptions: { edges }
    } = data;

    if (!edges) {
      return <Loader />;
    }

    return (
      <List className={className}>
        {edges.map(
          (edge): React.ReactNode => edge && edge.node && <SubscriptionFragment key={edge.node.id} data={edge.node} onDelete={onDelete} />
        )}
      </List>
    );
  }
}

export default createPaginationContainer<Props>(
  Subscriptions,
  {
    data: graphql`
      fragment SubscriptionsPagination_data on NotificationsType {
        id
        subscriptions(first: $count, after: $after) @connection(key: "Notifications_subscriptions") {
          edges {
            node {
              id
              ...SubscriptionFragment_data
            }
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.data && props.data.subscriptions;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(_props, { count, cursor }) {
      return { count, cursor };
    },
    query: graphql`
      query SubscriptionsPaginationQuery($count: Int!, $after: String) {
        app {
          settings {
            notifications {
              ...SubscriptionsPagination_data
            }
          }
        }
      }
    `
  }
);
