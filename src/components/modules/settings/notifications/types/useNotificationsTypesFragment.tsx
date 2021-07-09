import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useNotificationsTypesFragment,
  useNotificationsTypesFragment$ref,
} from './__generated__/useNotificationsTypesFragment.graphql';

const query = graphql`
  fragment useNotificationsTypesFragment on TypesNotificationsSettings {
    events
    goals
    meetings
    routines
    todos
  }
`;

export default (
  data: useNotificationsTypesFragment$ref,
): Omit<useNotificationsTypesFragment, ' $refType'> => useFragment(query, data);
