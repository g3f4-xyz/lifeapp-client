import graphql from 'babel-plugin-relay/macro';
import { commitMutation, DeclarativeMutationConfig } from 'react-relay';
import environment from '../environment';
import {
  deleteSubscriptionMutation,
  deleteSubscriptionMutationInput,
  deleteSubscriptionMutationResponse
} from './__generated__/deleteSubscriptionMutation.graphql';

const mutation = graphql`
  mutation deleteSubscriptionMutation($input: deleteSubscriptionMutationInput!) {
    deleteSubscription(input: $input) {
      clientMutationId
      subscriptionId
    }
  }
`;

export default ({
  parentID,
  subscriptionId
}: deleteSubscriptionMutationInput & { parentID: string }): Promise<deleteSubscriptionMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { subscriptionId } };
    const configs: DeclarativeMutationConfig[] = [
      {
        type: 'RANGE_DELETE',
        parentID,
        connectionKeys: [
          {
            key: 'Notifications_subscriptions'
          }
        ],
        pathToConnection: ['notifications', 'subscriptions'],
        deletedIDFieldName: 'subscriptionId'
      }
    ];

    commitMutation<deleteSubscriptionMutation>(environment, {
      configs,
      mutation,
      variables,
      onCompleted,
      onError
    });
  });
