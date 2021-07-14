import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'relay-hooks';
import getQueryData from '../../utils/relay/getQueryData';
import { useTaskTypesQuery } from './__generated__/useTaskTypesQuery.graphql';

const query = graphql`
  query useTaskTypesQuery {
    taskTypes {
      ...useTaskTypeListFragment
    }
  }
`;

export default () => getQueryData(useLazyLoadQuery<useTaskTypesQuery>(query));
