import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { DeclarativeMutationConfig } from 'relay-runtime';
import {
  DeleteTaskInput,
  useDeleteTaskMutation,
} from './__generated__/useDeleteTaskMutation.graphql';

const mutation = graphql`
  mutation useDeleteTaskMutation($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      # Aktualnie serwer zwraca null przez co za pewne nie działa jakiś mechanizm relay
      clientMutationId
      deletedTaskId
    }
  }
`;

export default (parentID: string) => {
  const [mutate] = useMutation<useDeleteTaskMutation>(mutation);
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

  return (input: DeleteTaskInput) =>
    mutate({
      variables: { input },
      configs,
    });
};
