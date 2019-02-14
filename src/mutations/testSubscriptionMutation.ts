// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';
import {
  testSubscriptionMutation,
  testSubscriptionMutationInput,
  testSubscriptionMutationResponse,
} from './__generated__/testSubscriptionMutation.graphql';

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

export default (
  { subscriptionId }: testSubscriptionMutationInput,
): Promise<testSubscriptionMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { subscriptionId } };

  commitMutation<testSubscriptionMutation>(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError,
    },
  );
});