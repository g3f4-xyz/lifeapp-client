import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { useTasksQuery, useTasksQueryVariables } from './__generated__/useTasksQuery.graphql';

const query = graphql`
  query useTasksQuery {
    ...useTaskListPagination
  }
`;

export default (variables: useTasksQueryVariables) =>
  useLazyLoadQuery<useTasksQuery>(query, variables, {});
