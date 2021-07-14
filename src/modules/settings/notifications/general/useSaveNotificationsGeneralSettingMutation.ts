import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import mutationUpdaterWithParent from '../../../../utils/relay/mutationUpdaterWithParentId';
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

export default (parentRecordId: string) => {
  const [mutate] = useMutation<useSaveNotificationsGeneralSettingMutation>(mutation);

  return ({ general }: SaveNotificationsGeneralSettingInput) =>
    mutate({
      variables: { input: { general } },
      updater: mutationUpdaterWithParent({
        parentRecordId,
        storeRecordKey: 'general',
        responseKey: 'savedGeneral',
        mutationName: 'saveNotificationsGeneralSetting',
      }),
    });
};
