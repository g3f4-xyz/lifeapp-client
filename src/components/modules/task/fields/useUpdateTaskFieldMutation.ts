import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
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
        ...useChoiceFieldFragmentValue @relay(mask: false)
        # ...useNestedFieldFragmentValue @relay(mask: false)
        ...useSwitchFieldFragmentValue @relay(mask: false)
        ...useSliderFieldFragmentValue @relay(mask: false)
        ...useTextFieldFragmentValue @relay(mask: false)
      }
    }
  }
`;

export default (id: string) => {
  const [mutate] = useMutation<useUpdateTaskFieldMutation>(mutation);
  return (input: UpdateTaskFieldInput) =>
    mutate({
      variables: { input },
      optimisticUpdater(proxyStore) {
        const [valueKey] = Object.keys(input.value);
        if (valueKey !== 'ownValue') {
          const fieldRecord = proxyStore.get(id);
          const valueRecord = fieldRecord && fieldRecord.getLinkedRecord('value');

          if (valueRecord) {
            valueRecord.setValue(input.value[valueKey], valueKey);
          }
        }
      },
      updater(store) {
        const mutationRecord = store.getRootField('updateTaskField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedValue');
        const fieldRecord = store.get(id);
        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    });
};
