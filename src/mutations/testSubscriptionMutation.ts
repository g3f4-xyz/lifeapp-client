import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'relay-hooks';
import {
  testSubscriptionMutation,
  TestSubscriptionInput,
  testSubscriptionMutationResponse,
} from './__generated__/testSubscriptionMutation.graphql';
import { Environment } from 'relay-runtime';

const mutation = graphql`
  mutation testSubscriptionMutation($input: TestSubscriptionInput!) {
    testSubscription(input: $input) {
      clientMutationId
      statusCode
    }
  }
`;

export default (
  { subscriptionId }: TestSubscriptionInput,
  environment: Environment,
): Promise<testSubscriptionMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { subscriptionId } };

    commitMutation<testSubscriptionMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
    });
  });
