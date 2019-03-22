// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskSliderFieldMutation,
  updateTaskSliderFieldMutationInput,
  updateTaskSliderFieldMutationResponse,
} from './__generated__/updateTaskSliderFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskSliderFieldMutation(
    $input: updateTaskSliderFieldMutationInput!
  ) {
    updateTaskSliderField(input: $input) {
      fieldId
      taskId
      updatedFieldValue {
        ...SliderFieldFragmentValue @relay(mask: false)
      }
    }
  }
`;

export default (
  { fieldId, fieldValue, taskId }: updateTaskSliderFieldMutationInput,
  { id }: { id: string },
): Promise<updateTaskSliderFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, fieldValue, taskId } };

  commitMutation<updateTaskSliderFieldMutation>(
    environment,
    {
      // @ts-ignore
      mutation,
      variables,
      onCompleted,
      onError,
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const fieldRecord = proxyStore.get(id);
        const valueRecord = fieldRecord && fieldRecord.getLinkedRecord('value');

        if (valueRecord) {
          valueRecord.setValue(fieldValue.progress, 'progress');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskSliderField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedFieldValue');
        const fieldRecord = store.get(id);

        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    },
  );
});
