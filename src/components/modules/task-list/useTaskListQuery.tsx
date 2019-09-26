// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import {
  useTaskListQuery,
  useTaskListQueryVariables,
} from './__generated__/useTaskListQuery.graphql';

const query = graphql`
  query useTaskListQuery($count: Int!, $after: String) {
    app {
      taskList {
        ...useTaskListPagination
      }
      settings {
        id
        taskList {
          filters {
            title
            taskType
            status
          }
        }
      }
    }
  }
`;

export default (variables: useTaskListQueryVariables) =>
  useQuery<useTaskListQuery>({
    query,
    variables,
  });
