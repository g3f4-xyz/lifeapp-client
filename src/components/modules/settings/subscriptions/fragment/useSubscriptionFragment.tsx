// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useSubscriptionFragment,
  useSubscriptionFragment$ref,
} from './__generated__/useSubscriptionFragment.graphql';

const query = graphql`
  fragment useSubscriptionFragment on NotificationSubscription {
    id
    userAgent
    userDeviceType
  }
`;

export default (data: useSubscriptionFragment$ref): Omit<useSubscriptionFragment, ' $refType'> =>
  useFragment(query, data);
