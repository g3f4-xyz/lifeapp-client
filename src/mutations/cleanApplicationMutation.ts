// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
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

export default ({ ownerId }: any): any => new Promise((resolve: any, reject: any): any => {
  const variables = { input: { ownerId } };

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
