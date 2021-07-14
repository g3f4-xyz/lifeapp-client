import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useSubscriptionListItemFragment$key } from './__generated__/useSubscriptionListItemFragment.graphql';

const query = graphql`
  fragment useSubscriptionListItemFragment on NotificationSubscription {
    id
    userAgent
    userDeviceType
  }
`;

export default (data: useSubscriptionListItemFragment$key) => useSuspenseFragment(query, data);
