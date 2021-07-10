import { List } from '@material-ui/core';
import React from 'react';
import { useSubscriptionsListFragment$key } from './__generated__/useSubscriptionsListFragment.graphql';
import SubscriptionFragment from './fragment/SubscriptionFragment';
import useSubscriptionsListFragment from './useSubscriptionsListFragment';

interface SubscriptionsProps {
  className?: string;
  data: useSubscriptionsListFragment$key;

  onDelete(subscriptionId: string): void;
}

export default function Subscriptions(props: SubscriptionsProps) {
  const { className, data, onDelete } = props;
  const { subscriptions } = useSubscriptionsListFragment(data);

  return (
    <List className={className}>
      {subscriptions.map(
        (item): React.ReactNode =>
          item && <SubscriptionFragment key={item.id} data={item} onDelete={onDelete} />,
      )}
    </List>
  );
}
