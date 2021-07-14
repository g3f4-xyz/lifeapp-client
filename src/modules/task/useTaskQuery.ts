import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'relay-hooks';
import getQueryData from '../../utils/relay/getQueryData';
import { useTaskQuery, useTaskQueryVariables } from './__generated__/useTaskQuery.graphql';

const query = graphql`
  query useTaskQuery($id: ID, $typeId: TaskTypeId) {
    task(id: $id, typeId: $typeId) {
      ...useTaskFragment
    }
  }
`;

export default (variables: useTaskQueryVariables) =>
  getQueryData(useLazyLoadQuery<useTaskQuery>(query, variables));
