import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';
import {
  saveNotificationsTypesSettingMutation,
  SaveNotificationsTypesSettingInput,
  saveNotificationsTypesSettingMutationResponse,
} from './__generated__/saveNotificationsTypesSettingMutation.graphql';

const mutation = graphql`
  mutation saveNotificationsTypesSettingMutation(
    $input: SaveNotificationsTypesSettingInput!
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
}: SaveNotificationsTypesSettingInput): Promise<
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
