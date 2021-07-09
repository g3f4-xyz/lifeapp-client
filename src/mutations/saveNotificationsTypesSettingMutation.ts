import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import {
  saveNotificationsTypesSettingMutation,
  SaveNotificationsTypesSettingInput,
  saveNotificationsTypesSettingMutationResponse,
} from './__generated__/saveNotificationsTypesSettingMutation.graphql';
import { Environment } from 'relay-runtime';

const mutation = graphql`
  mutation saveNotificationsTypesSettingMutation($input: SaveNotificationsTypesSettingInput!) {
    saveNotificationsTypesSetting(input: $input) {
      savedTypes {
        ...useNotificationsTypesFragment
      }
    }
  }
`;

export default (
  { types }: SaveNotificationsTypesSettingInput,
  environment: Environment,
): Promise<saveNotificationsTypesSettingMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { types } };

    commitMutation<saveNotificationsTypesSettingMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
    });
  });
