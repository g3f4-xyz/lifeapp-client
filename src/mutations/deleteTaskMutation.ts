import graphql from 'babel-plugin-relay/macro';
import { commitMutation, DeclarativeMutationConfig } from 'react-relay';
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

export default ({
  id,
  parentID,
}: deleteTaskMutationInput & { parentID: string }): Promise<deleteTaskMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { id } };
    const configs: DeclarativeMutationConfig[] = [
      {
        type: 'RANGE_DELETE',
        parentID,
        connectionKeys: [
          {
            key: 'TaskList_list',
          },
        ],
        pathToConnection: ['taskList', 'list'],
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
