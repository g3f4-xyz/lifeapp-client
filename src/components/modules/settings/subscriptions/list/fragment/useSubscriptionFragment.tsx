import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import { useSubscriptionFragment$key } from './__generated__/useSubscriptionFragment.graphql';

const query = graphql`
  fragment useSubscriptionFragment on NotificationSubscription {
    id
    userAgent
    userDeviceType
  }
`;

export default (data: useSubscriptionFragment$key) => useFragment(query, data);
