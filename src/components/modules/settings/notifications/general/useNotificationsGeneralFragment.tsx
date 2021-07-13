import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import { useNotificationsGeneralFragment$key } from './__generated__/useNotificationsGeneralFragment.graphql';

const query = graphql`
  fragment useNotificationsGeneralFragment on GeneralNotificationsSettings {
    show
    vibrate
  }
`;

export default (data: useNotificationsGeneralFragment$key) => useFragment(query, data);
