import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useNotificationsTypesFragment$key } from './__generated__/useNotificationsTypesFragment.graphql';

const query = graphql`
  fragment useNotificationsTypesFragment on TypesNotificationsSettings {
    events
    goals
    meetings
    routines
    todos
  }
`;

export default (data: useNotificationsTypesFragment$key) => useSuspenseFragment(query, data);
