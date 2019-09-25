import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';
import {
  saveNotificationsTypesSettingMutation,
  saveNotificationsTypesSettingMutationInput,
  saveNotificationsTypesSettingMutationResponse,
} from './__generated__/saveNotificationsTypesSettingMutation.graphql';

const mutation = graphql`
  mutation saveNotificationsTypesSettingMutation(
    $input: saveNotificationsTypesSettingMutationInput!
  ) {
    saveNotificationsTypesSetting(input: $input) {
      savedTypes {
        ...NotificationsTypesFragment_data
      }
    }
  }
`;

export default ({
  types,
}: saveNotificationsTypesSettingMutationInput): Promise<
  saveNotificationsTypesSettingMutationResponse
> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { types } };

    commitMutation<saveNotificationsTypesSettingMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
    });
  });
