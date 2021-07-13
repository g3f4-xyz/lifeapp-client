import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import { useSubscriptionListFragment$key } from './__generated__/useSubscriptionListFragment.graphql';

const query = graphql`
  fragment useSubscriptionListFragment on NotificationsSettings {
    subscriptions {
      id
      ...useSubscriptionListItemFragment
    }
  }
`;

export default (data: useSubscriptionListFragment$key) => useFragment(query, data);
