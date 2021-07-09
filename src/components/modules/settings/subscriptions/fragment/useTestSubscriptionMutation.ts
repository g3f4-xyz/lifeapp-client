import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import {
  TestSubscriptionInput,
  useTestSubscriptionMutation,
} from './__generated__/useTestSubscriptionMutation.graphql';

const mutation = graphql`
  mutation useTestSubscriptionMutation($input: TestSubscriptionInput!) {
    testSubscription(input: $input) {
      clientMutationId
      statusCode
    }
  }
`;

export default () => {
  const [mutate] = useMutation<useTestSubscriptionMutation>(mutation);
  return ({ subscriptionId }: TestSubscriptionInput) =>
    mutate({
      variables: { input: { subscriptionId } },
    });
};
