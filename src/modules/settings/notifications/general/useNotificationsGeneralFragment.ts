import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useNotificationsGeneralFragment$key } from './__generated__/useNotificationsGeneralFragment.graphql';

const query = graphql`
  fragment useNotificationsGeneralFragment on GeneralNotificationsSettings {
    show
    vibrate
  }
`;

export default (data: useNotificationsGeneralFragment$key) => useSuspenseFragment(query, data);
