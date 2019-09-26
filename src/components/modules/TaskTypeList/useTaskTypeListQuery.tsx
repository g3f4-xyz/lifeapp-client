// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import {
  useTaskTypeListQuery,
  useTaskTypeListQueryVariables,
} from './__generated__/useTaskTypeListQuery.graphql';

const query = graphql`
  query useTaskTypeListQuery($count: Int!, $after: String) {
    app {
      taskTypeList {
        ...useTaskTypePagination
      }
    }
  }
`;

export default (variables: useTaskTypeListQueryVariables) =>
  useQuery<useTaskTypeListQuery>({
    query,
    variables,
  });
