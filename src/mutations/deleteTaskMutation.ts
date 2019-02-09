// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';
import {
  deleteTaskMutation,
  deleteTaskMutationInput,
  deleteTaskMutationResponse,
} from './__generated__/deleteTaskMutation.graphql';

const mutation = graphql`
  mutation deleteTaskMutation($input: deleteTaskMutationInput!) {
    deleteTask(input: $input) {
      # Aktualnie serwer zwraca null przez co za pewne nie działa jakiś mechanizm relay
      clientMutationId
      deletedTaskId
    }
  }
`;

export default (
  { id, parentID }: deleteTaskMutationInput & { parentID: string },
): Promise<deleteTaskMutationResponse> => new Promise((resolve: any, reject: any): any => {
  const variables = { input: { id } };
  const configs = [{
    type: 'RANGE_DELETE',
    parentID,
    connectionKeys: [{
      key: 'TaskList_list',
    }],
    pathToConnection: ['taskList', 'list'],
    deletedIDFieldName: 'deletedTaskId',
  }];

  commitMutation<deleteTaskMutation>(
    environment,
    {
      mutation,
      // @ts-ignore
      configs,
      variables,
      onCompleted: resolve,
      onError: reject,
    },
  );
});
