import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../environment';

const mutation = graphql`
  mutation testSubscriptionMutation(
    $input: testSubscriptionMutationInput!
  ) {
    testSubscriptionMutation(input: $input) {
      clientMutationId
      statusCode
    }
  }
`;

export default ({ subscriptionId }) => new Promise((resolve, reject) => {
  const variables = { input: { subscriptionId } };
  console.log(['mutation:testSubscription:subscriptionId'], subscriptionId);

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    },
  );
});
