import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'relay-hooks';
import {
  cleanApplicationMutation,
  CleanApplicationInput,
  cleanApplicationMutationResponse,
} from './__generated__/cleanApplicationMutation.graphql';
import { Environment } from 'relay-runtime';

const mutation = graphql`
  mutation cleanApplicationMutation($input: CleanApplicationInput!) {
    cleanApplication(input: $input) {
      clientMutationId
      navigationUrl
    }
  }
`;

export default (
  { ownerId }: CleanApplicationInput,
  environment: Environment,
): Promise<cleanApplicationMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { ownerId } };

    commitMutation<cleanApplicationMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
    });
  });
