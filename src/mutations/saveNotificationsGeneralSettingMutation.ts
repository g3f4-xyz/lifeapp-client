// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';

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

export default ({ general }: any): any => new Promise((resolve: any, reject: any): any => {
  const variables = { input: { general } };

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
