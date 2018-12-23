import { commitMutation, graphql } from 'react-relay';
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

export default ({ types }) => new Promise((resolve, reject) => {
  const variables = { input: { types } };
  console.log(['mutation:saveNotificationsTypesSetting:variables'], variables);

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
