// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import { useTaskQuery, useTaskQueryVariables } from './__generated__/useTaskQuery.graphql';

const query = graphql`
  query useTaskQuery($id: ID, $typeId: TaskTypeId) {
    task(id: $id, typeId: $typeId) {
      ...useTaskFragment
    }
  }
`;

export default (variables: useTaskQueryVariables) => useQuery<useTaskQuery>(query, variables, {});
