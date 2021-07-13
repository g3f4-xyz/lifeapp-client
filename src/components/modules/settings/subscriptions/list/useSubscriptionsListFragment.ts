import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import { useSubscriptionsListFragment$key } from './__generated__/useSubscriptionsListFragment.graphql';

const query = graphql`
  fragment useSubscriptionsListFragment on NotificationsSettings {
    subscriptions {
      id
      ...useSubscriptionFragment
    }
  }
`;

export default (data: useSubscriptionsListFragment$key) => useFragment(query, data);
