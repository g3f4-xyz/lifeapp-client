import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../environment';

const mutation = graphql`
  mutation saveSettingsMutation(
    $input: saveSettingsMutationInput!
  ) {
    saveSettings(input: $input) {
      clientMutationId 
      settings {
        id
        ownerId
        authentication {
          provider
        }
        notifications {
          daily {
            events
            meetings
            todos
            routines
          }
          show
          single {
            events
            meetings
            todos
            routines
          }
        }
      }
    }
  }
`;

export default ({ isNew = false, settings, hashId }) => new Promise((resolve, reject) => {
  const variables = { input: { isNew, settings, hashId } };
  console.log(['mutation:saveSettings:variables'], variables);

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
