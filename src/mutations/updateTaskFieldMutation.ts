// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskFieldMutation,
  updateTaskFieldMutationInput,
  updateTaskFieldMutationResponse
} from './__generated__/updateTaskFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskFieldMutation(
    $input: updateTaskFieldMutationInput!
  ) {
    updateTaskField(input: $input) {
      fieldId
      taskId
      updatedValue {
        ...ChoiceFieldFragmentValue @relay(mask: false)
        ...NestedFieldFragmentValue @relay(mask: false)
        ...SwitchFieldFragmentValue @relay(mask: false)
        ...SliderFieldFragmentValue @relay(mask: false)
        ...TextFieldFragmentValue @relay(mask: false)
      }
    }
  }
`;

export default (
  { fieldId, value, taskId }: updateTaskFieldMutationInput,
  { id }: { id: string },
): Promise<updateTaskFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, value, taskId } };

  commitMutation<updateTaskFieldMutation>(
    environment,
    {
      // @ts-ignore
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
    },
  );
});
