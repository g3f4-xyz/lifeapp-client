// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';

const mutation = graphql`
  mutation saveNotificationsTypesSettingMutation(
  $input: saveNotificationsTypesSettingMutationInput!
  ) {
    saveNotificationsTypesSetting(input: $input) {
      savedTypes {
        ...NotificationsTypesFragment
      },
    }
  }
`;

export default ({ types }: any): any => new Promise((resolve: any, reject: any): any => {
  const variables = { input: { types } };

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
