import graphql from 'babel-plugin-relay/macro';
import { DeclarativeMutationConfig } from 'react-relay';
import { useMutation } from 'relay-hooks';
import { useDeleteTaskMutation } from '../../task-list/pagination/__generated__/useDeleteTaskMutation.graphql';
import { DeleteSubscriptionInput } from './__generated__/useDeleteSubscriptionMutation.graphql';

const mutation = graphql`
  mutation useDeleteSubscriptionMutation($input: DeleteSubscriptionInput!) {
    deleteSubscription(input: $input) {
      clientMutationId
      subscriptionId
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
          key: 'Notifications_subscriptions',
        },
      ],
      pathToConnection: ['notifications', 'subscriptions'],
      deletedIDFieldName: 'subscriptionId',
    },
  ];
  return (input: DeleteSubscriptionInput) =>
    mutate({
      variables: { input },
      configs,
    });
};
