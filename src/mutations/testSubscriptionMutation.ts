// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';

const mutation = graphql`
  mutation testSubscriptionMutation(
  $input: testSubscriptionMutationInput!
  ) {
    testSubscription(input: $input) {
      clientMutationId
      statusCode
    }
  }
`;

export default ({ subscriptionId }: any): any => new Promise((resolve: any, reject: any): any => {
  const variables = { input: { subscriptionId } };

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
