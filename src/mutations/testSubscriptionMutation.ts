import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';
import {
  testSubscriptionMutation,
  TestSubscriptionInput,
  testSubscriptionMutationResponse,
} from './__generated__/testSubscriptionMutation.graphql';

const mutation = graphql`
  mutation testSubscriptionMutation($input: TestSubscriptionInput!) {
    testSubscription(input: $input) {
      clientMutationId
      statusCode
    }
  }
`;

export default ({
  subscriptionId,
}: TestSubscriptionInput): Promise<testSubscriptionMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { subscriptionId } };

    commitMutation<testSubscriptionMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
    });
  });
