import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'relay-hooks';
import { Environment, RecordSourceSelectorProxy } from 'relay-runtime';
import {
  updateTaskFieldMutation,
  UpdateTaskFieldInput,
  updateTaskFieldMutationResponse,
} from './__generated__/updateTaskFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskFieldMutation($input: UpdateTaskFieldInput!) {
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

export default (
  { fieldId, value, taskId }: UpdateTaskFieldInput,
  { id }: { id: string },
  environment: Environment,
): Promise<updateTaskFieldMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { fieldId, value, taskId } };

    commitMutation<updateTaskFieldMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const [valueKey] = Object.keys(value);
        if (valueKey !== 'ownValue') {
          const fieldRecord = proxyStore.get(id);
          const valueRecord = fieldRecord && fieldRecord.getLinkedRecord('value');

          if (valueRecord) {
            valueRecord.setValue(value[valueKey], valueKey);
          }
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedValue');
        const fieldRecord = store.get(id);
        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    });
  });
