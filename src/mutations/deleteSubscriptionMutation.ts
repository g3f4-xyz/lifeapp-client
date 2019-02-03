// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';

const mutation = graphql`
  mutation deleteSubscriptionMutation(
  $input: deleteSubscriptionMutationInput!
  ) {
    deleteSubscription(input: $input) {
      clientMutationId
      subscriptionId
    }
  }
`;

export default ({ parentID, subscriptionId }: any): any => new Promise((resolve: any, reject: any): any => {
  const variables = { input: { subscriptionId } };
  const configs = [{
    type: 'RANGE_DELETE',
    parentID,
    connectionKeys: [{
      key: 'Notifications_subscriptions',
    }],
    pathToConnection: ['notifications', 'subscriptions'],
    deletedIDFieldName: 'subscriptionId',
  }];

  commitMutation(
    environment,
    {
      // @ts-ignore
      configs,
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    },
  );
});
