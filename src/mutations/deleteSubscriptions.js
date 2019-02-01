import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../environment';

const mutation = graphql`
  mutation deleteSubscriptionsMutation(
    $input: deleteSubscriptionsMutationInput!
  ) {
    deleteSubscriptions(input: $input) {
      clientMutationId
      ownerId
    }
  }
`;

export default ({ ownerId }) => new Promise((resolve, reject) => {
  const variables = { input: { ownerId } };
  console.log(['mutation:deleteSubscriptions:ownerId'], ownerId);

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
