import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useSettingsFragment$key } from './__generated__/useSettingsFragment.graphql';

const query = graphql`
  fragment useSettingsFragment on Settings {
    ownerId
    notifications {
      id
      general {
        ...useNotificationsGeneralFragment
      }
      ...useNotificationsTaskTypesFragment
      ...useSubscriptionListFragment
    }
  }
`;

export default (data: useSettingsFragment$key) => useSuspenseFragment(query, data);
