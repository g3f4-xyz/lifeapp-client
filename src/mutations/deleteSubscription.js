import {
  commitMutation,
  graphql,
} from 'react-relay';
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

export default ({ parentID, subscriptionId }) => new Promise((resolve, reject) => {
  const variables = { input: { subscriptionId } };
  console.log(['mutation:deleteSubscriptions:subscriptionId'], subscriptionId);

  const configs = [{
    type: 'RANGE_DELETE',
    parentID,
    connectionKeys: [{
      key: 'Notifications_subscriptions',
    }],
    pathToConnection: ['notifications', 'subscriptions'],
    deletedIDFieldName: 'subscriptionId'
  }];

  commitMutation(
    environment,
    {
      configs,
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    },
  );
});
