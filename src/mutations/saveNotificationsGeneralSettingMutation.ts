// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';
import {
  saveNotificationsGeneralSettingMutation,
  saveNotificationsGeneralSettingMutationInput,
  saveNotificationsGeneralSettingMutationResponse,
} from './__generated__/saveNotificationsGeneralSettingMutation.graphql';

const mutation = graphql`
  mutation saveNotificationsGeneralSettingMutation(
  $input: saveNotificationsGeneralSettingMutationInput!
  ) {
    saveNotificationsGeneralSetting(input: $input) {
      clientMutationId
      savedGeneral {
        ...NotificationsGeneralFragment
      },
    }
  }
`;

export default (
  { general }: saveNotificationsGeneralSettingMutationInput,
): Promise<saveNotificationsGeneralSettingMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { general } };

  commitMutation<saveNotificationsGeneralSettingMutation>(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError,
    },
  );
});
