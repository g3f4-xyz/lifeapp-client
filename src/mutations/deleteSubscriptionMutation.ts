import graphql from 'babel-plugin-relay/macro';
import { commitMutation, DeclarativeMutationConfig } from 'react-relay';
import {
  deleteSubscriptionMutation,
  DeleteSubscriptionInput,
  deleteSubscriptionMutationResponse,
} from './__generated__/deleteSubscriptionMutation.graphql';
import { Environment } from 'relay-runtime';

const mutation = graphql`
  mutation deleteSubscriptionMutation($input: DeleteSubscriptionInput!) {
    deleteSubscription(input: $input) {
      clientMutationId
      subscriptionId
    }
  }
`;

export default (
  { parentID, subscriptionId }: DeleteSubscriptionInput & { parentID: string },
  environment: Environment,
): Promise<deleteSubscriptionMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { subscriptionId } };
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

    commitMutation<deleteSubscriptionMutation>(environment, {
      configs,
      mutation,
      variables,
      onCompleted,
      onError,
    });
  });
