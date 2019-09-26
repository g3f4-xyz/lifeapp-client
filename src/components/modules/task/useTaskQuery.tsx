// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import { useTaskQuery, useTaskQueryVariables } from './__generated__/useTaskQuery.graphql';

const query = graphql`
  query useTaskQuery($id: ID, $type: String) {
    app {
      task(id: $id, type: $type) {
        id
        ...useTaskFragment
      }
      taskList {
        id
      }
    }
  }
`;

export default (variables: useTaskQueryVariables) =>
  useQuery<useTaskQuery>({
    query,
    variables,
  });
