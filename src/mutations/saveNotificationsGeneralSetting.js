import { commitMutation, graphql } from 'react-relay';
import environment from '../environment';

const mutation = graphql`
  mutation saveNotificationsGeneralSettingMutation(
    $input: saveNotificationsGeneralSettingMutationInput!
  ) {
    saveNotificationsGeneralSetting(input: $input) {
      savedGeneral {
        ...NotificationsGeneralFragment
    },
    }
  }
`;

export default ({ general }) => new Promise((resolve, reject) => {
  const variables = { input: { general } };
  console.log(['mutation:saveNotificationsGeneralSetting:variables'], variables);

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
