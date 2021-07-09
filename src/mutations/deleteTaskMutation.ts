import graphql from 'babel-plugin-relay/macro';
import { DeclarativeMutationConfig } from 'react-relay';
import { commitMutation } from 'relay-hooks';
import {
  deleteTaskMutation,
  DeleteTaskInput,
  deleteTaskMutationResponse,
} from './__generated__/deleteTaskMutation.graphql';
import { Environment } from 'relay-runtime';

const mutation = graphql`
  mutation deleteTaskMutation($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      # Aktualnie serwer zwraca null przez co za pewne nie działa jakiś mechanizm relay
      clientMutationId
      deletedTaskId
    }
  }
`;

export default (
  { id, parentID }: DeleteTaskInput & { parentID: string },
  environment: Environment,
): Promise<deleteTaskMutationResponse> =>
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
