import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../environment';

const mutation = graphql`
  mutation cleanApplicationMutation(
    $input: cleanApplicationMutationInput!
  ) {
    cleanApplication(input: $input) {
      clientMutationId
      navigationUrl
    }
  }
`;

export default ({ ownerId }) => new Promise((resolve, reject) => {
  const variables = { input: { ownerId } };
  console.log(['mutation:cleanApplication:ownerId'], ownerId);

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
