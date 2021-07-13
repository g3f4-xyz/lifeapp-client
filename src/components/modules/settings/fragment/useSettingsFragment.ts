import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useSettingsFragment,
  useSettingsFragment$key,
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
      ...useSubscriptionsListFragment
    }
  }
`;

export default (data: useSettingsFragment$key): Omit<useSettingsFragment, ' $refType'> =>
  useFragment(query, data);
