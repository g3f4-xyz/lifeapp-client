import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import {
  useTaskTypesQuery,
  useTaskTypesQueryVariables,
} from './__generated__/useTaskTypesQuery.graphql';

const query = graphql`
  query useTaskTypesQuery {
    taskTypes {
      ...useTaskTypeListFragment
    }
  }
`;

export default (variables: useTaskTypesQueryVariables) =>
  useQuery<useTaskTypesQuery>(query, variables, {});
