import graphql from 'babel-plugin-relay/macro';
import { commitMutation, DeclarativeMutationConfig } from 'react-relay';
import environment from '../environment';
import {
  deleteTaskMutation,
  DeleteTaskInput,
  deleteTaskMutationResponse,
} from './__generated__/deleteTaskMutation.graphql';

const mutation = graphql`
  mutation deleteTaskMutation($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      # Aktualnie serwer zwraca null przez co za pewne nie działa jakiś mechanizm relay
      clientMutationId
      deletedTaskId
    }
  }
`;

export default ({
  id,
  parentID,
}: DeleteTaskInput & { parentID: string }): Promise<deleteTaskMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { id } };
    const configs: DeclarativeMutationConfig[] = [
      {
        type: 'RANGE_DELETE',
        parentID,
        connectionKeys: [
          {
            key: 'TaskConnection_list',
          },
        ],
        pathToConnection: ['tasks', 'list'],
        deletedIDFieldName: 'deletedTaskId',
      },
    ];

    commitMutation<deleteTaskMutation>(environment, {
      mutation,
      configs,
      variables,
      onCompleted,
      onError,
    });
  });
