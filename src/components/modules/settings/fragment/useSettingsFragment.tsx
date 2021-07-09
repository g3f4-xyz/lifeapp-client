import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useSettingsFragment,
  useSettingsFragment$ref,
} from './__generated__/useSettingsFragment.graphql';

const query = graphql`
  fragment useSettingsFragment on Settings {
    ownerId
    notifications {
      id
      general {
        ...useNotificationsGeneralFragment
      }
      types {
        ...useNotificationsTypesFragment
      }
      ...useSubscriptionsPagination
    }
  }
`;

export default (data: useSettingsFragment$ref): Omit<useSettingsFragment, ' $refType'> =>
  useFragment(query, data);
