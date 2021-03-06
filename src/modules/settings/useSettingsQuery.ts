import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import {
  useSettingsQuery,
  useSettingsQueryVariables,
} from './__generated__/useSettingsQuery.graphql';

const query = graphql`
  query useSettingsQuery {
    settings {
      ...useSettingsFragment
    }
  }
`;

export default (variables: useSettingsQueryVariables) =>
  useQuery<useSettingsQuery>(query, variables, {});
