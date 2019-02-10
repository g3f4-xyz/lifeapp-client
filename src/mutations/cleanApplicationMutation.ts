// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';
import {
  cleanApplicationMutation, cleanApplicationMutationInput, cleanApplicationMutationResponse,
} from './__generated__/cleanApplicationMutation.graphql';

const mutation = graphql`
  mutation cleanApplicationMutation($input: cleanApplicationMutationInput!) {
    cleanApplication(input: $input) {
      clientMutationId
      navigationUrl
    }
  }
`;

export default (
  { ownerId }: cleanApplicationMutationInput,
): Promise<cleanApplicationMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { ownerId } };

  commitMutation<cleanApplicationMutation>(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError,
    },
  );
});
