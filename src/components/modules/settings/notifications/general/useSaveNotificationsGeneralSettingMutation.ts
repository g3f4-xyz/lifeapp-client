import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import {
  SaveNotificationsGeneralSettingInput,
  useSaveNotificationsGeneralSettingMutation,
} from './__generated__/useSaveNotificationsGeneralSettingMutation.graphql';

const mutation = graphql`
  mutation useSaveNotificationsGeneralSettingMutation(
    $input: SaveNotificationsGeneralSettingInput!
  ) {
    saveNotificationsGeneralSetting(input: $input) {
      savedGeneral {
        ...useNotificationsGeneralFragment
      }
    }
  }
`;

export default () => {
  const [mutate] = useMutation<useSaveNotificationsGeneralSettingMutation>(mutation);

  return ({ general }: SaveNotificationsGeneralSettingInput) =>
    mutate({
      variables: { input: { general } },
    });
};
