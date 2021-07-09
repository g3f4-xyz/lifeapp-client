import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import {
  CleanApplicationInput,
  useCleanApplicationMutation,
} from './__generated__/useCleanApplicationMutation.graphql';

const mutation = graphql`
  mutation useCleanApplicationMutation($input: CleanApplicationInput!) {
    cleanApplication(input: $input) {
      clientMutationId
      navigationUrl
    }
  }
`;

export default () => {
  const [mutate] = useMutation<useCleanApplicationMutation>(mutation);
  return ({ ownerId }: CleanApplicationInput) =>
    mutate({
      variables: { input: { ownerId } },
    });
};
