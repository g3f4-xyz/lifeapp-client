import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useNotificationsTaskTypesFragment$key } from './__generated__/useNotificationsTaskTypesFragment.graphql';

const query = graphql`
  fragment useNotificationsTaskTypesFragment on NotificationsSettings {
    types {
      taskTypeId
      enabled
    }
  }
`;

export default (data: useNotificationsTaskTypesFragment$key) => useSuspenseFragment(query, data);
