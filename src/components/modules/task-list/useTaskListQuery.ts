import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import {
  useTaskListQuery,
  useTaskListQueryVariables,
} from './__generated__/useTaskListQuery.graphql';

const query = graphql`
  query useTaskListQuery {
    ...useTaskListPagination
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
  useLazyLoadQuery<useTaskListQuery>(query, variables, {});
