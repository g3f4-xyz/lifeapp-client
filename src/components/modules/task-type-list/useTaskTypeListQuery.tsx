import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import {
  useTaskTypeListQuery,
  useTaskTypeListQueryVariables,
} from './__generated__/useTaskTypeListQuery.graphql';

const query = graphql`
  query useTaskTypeListQuery($count: Int!, $after: String) {
    taskTypes {
      ...useTaskTypePagination
    }
  }
`;

export default (variables: useTaskTypeListQueryVariables) =>
  useQuery<useTaskTypeListQuery>(query, variables, {});
