import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import {
  useTaskListQuery,
  useTaskListQueryVariables,
} from './__generated__/useTaskListQuery.graphql';

const query = graphql`
  query useTaskListQuery($count: Int!, $after: String) {
    tasks {
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
`;

export default (variables: useTaskListQueryVariables) =>
  useQuery<useTaskListQuery>(query, variables, {});
