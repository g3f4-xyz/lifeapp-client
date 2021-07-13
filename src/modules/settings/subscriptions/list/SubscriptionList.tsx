import { List } from '@material-ui/core';
import React from 'react';
import { useSubscriptionListFragment$key } from './__generated__/useSubscriptionListFragment.graphql';
import SubscriptionListItem from './item/SubscriptionListItem';
import useSubscriptionListFragment from './useSubscriptionListFragment';

export default function Subscriptions(props: {
  className?: string;
  data: useSubscriptionListFragment$key;

  onDelete(subscriptionId: string): void;
}) {
  const { className, data, onDelete } = props;
  const { subscriptions } = useSubscriptionListFragment(data);

  return (
    <List className={className}>
      {subscriptions.map(
        (item): React.ReactNode =>
          item && <SubscriptionListItem key={item.id} data={item} onDelete={onDelete} />,
      )}
    </List>
  );
}
