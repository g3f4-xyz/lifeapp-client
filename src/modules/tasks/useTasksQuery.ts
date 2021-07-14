import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'relay-hooks';
import getQueryData from '../../utils/relay/getQueryData';
import { useTasksQuery } from './__generated__/useTasksQuery.graphql';

const query = graphql`
  query useTasksQuery {
    ...useTaskListPagination
  }
`;

export default () => getQueryData(useLazyLoadQuery<useTasksQuery>(query));
