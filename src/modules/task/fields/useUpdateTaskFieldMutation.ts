import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import mutationUpdaterWithParent from '../../../utils/relay/mutationUpdaterWithParentId';
import {
  UpdateTaskFieldInput,
  useUpdateTaskFieldMutation,
} from './__generated__/useUpdateTaskFieldMutation.graphql';

const mutation = graphql`
  mutation useUpdateTaskFieldMutation($input: UpdateTaskFieldInput!) {
    updateTaskField(input: $input) {
      fieldId
      taskId
      updatedValue {
        ... on SliderFieldValue {
          progress
        }
        ... on SwitchFieldValue {
          enabled
        }
        ... on ChoiceFieldValue {
          id
        }
        ... on TextFieldValue {
          text
        }
      }
    }
  }
`;

export default (parentRecordId: string) => {
  const [mutate] = useMutation<useUpdateTaskFieldMutation>(mutation);

  return (input: UpdateTaskFieldInput) =>
    mutate({
      variables: { input },
      optimisticUpdater(proxyStore) {
        const [valueKey] = Object.keys(input.value);

        if (valueKey !== 'ownValue') {
          const fieldRecord = proxyStore.get(parentRecordId);
          const valueRecord = fieldRecord && fieldRecord.getLinkedRecord('value');

          if (valueRecord) {
            valueRecord.setValue(input.value[valueKey], valueKey);
          }
        }
      },
      updater: mutationUpdaterWithParent({
        parentRecordId,
        storeRecordKey: 'value',
        responseKey: 'updatedValue',
        mutationName: 'updateTaskField',
      }),
    });
};
