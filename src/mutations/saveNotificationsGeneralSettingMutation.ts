import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import {
  saveNotificationsGeneralSettingMutation,
  SaveNotificationsGeneralSettingInput,
  saveNotificationsGeneralSettingMutationResponse,
} from './__generated__/saveNotificationsGeneralSettingMutation.graphql';
import { Environment } from 'relay-runtime';

const mutation = graphql`
  mutation saveNotificationsGeneralSettingMutation($input: SaveNotificationsGeneralSettingInput!) {
    saveNotificationsGeneralSetting(input: $input) {
      clientMutationId
      savedGeneral {
        ...useNotificationsGeneralFragment
      }
    }
  }
`;

export default (
  { general }: SaveNotificationsGeneralSettingInput,
  environment: Environment,
): Promise<saveNotificationsGeneralSettingMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { general } };

    commitMutation<saveNotificationsGeneralSettingMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
    });
  });
