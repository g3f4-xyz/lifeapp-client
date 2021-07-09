import { List } from '@material-ui/core';
import React, { FC } from 'react';
import Loader from '../../../../display/loader/Loader';
import SubscriptionFragment from '../fragment/SubscriptionFragment';
import { useSubscriptionsPagination$ref } from './__generated__/useSubscriptionsPagination.graphql';
import useSubscriptionsPagination from './useSubscriptionsPagination';

interface SubscriptionsProps {
  className?: string;
  data: useSubscriptionsPagination$ref;

  onDelete(subscriptionId: string): void;
}

const Subscriptions: FC<SubscriptionsProps> = props => {
  const { className, data, onDelete } = props;
  const [
    {
      subscriptions: { edges },
    },
  ] = useSubscriptionsPagination(data, 8);

  if (!edges) {
    return <Loader />;
  }

  return (
    <List className={className}>
      {edges.map(
        (edge): React.ReactNode =>
          edge &&
          edge.node && (
            <SubscriptionFragment key={edge.node.id} data={edge.node} onDelete={onDelete} />
          ),
      )}
    </List>
  );
};

export default Subscriptions;
