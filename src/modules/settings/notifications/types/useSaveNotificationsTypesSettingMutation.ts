import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import mutationUpdaterWithParent from '../../../../utils/relay/mutationUpdaterWithParentId';
import {
  SaveNotificationsTypesSettingInput,
  useSaveNotificationsTypesSettingMutation,
} from './__generated__/useSaveNotificationsTypesSettingMutation.graphql';

const mutation = graphql`
  mutation useSaveNotificationsTypesSettingMutation($input: SaveNotificationsTypesSettingInput!) {
    saveNotificationsTypesSetting(input: $input) {
      savedTypes {
        ...useNotificationsTypesFragment
      }
    }
  }
`;

export default (parentRecordId: string) => {
  const [mutate] = useMutation<useSaveNotificationsTypesSettingMutation>(mutation);

  return ({ types }: SaveNotificationsTypesSettingInput) =>
    mutate({
      variables: { input: { types } },
      updater: mutationUpdaterWithParent({
        parentRecordId,
        storeRecordKey: 'types',
        responseKey: 'savedTypes',
        mutationName: 'saveNotificationsTypesSetting',
      }),
    });
};
