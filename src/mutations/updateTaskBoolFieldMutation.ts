// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskBoolFieldMutation,
  updateTaskBoolFieldMutationInput,
  updateTaskBoolFieldMutationResponse
} from './__generated__/updateTaskBoolFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskBoolFieldMutation(
    $input: updateTaskBoolFieldMutationInput!
  ) {
    updateTaskBoolField(input: $input) {
      fieldId
      taskId
      updatedFieldValue {
        bool
      }
    }
  }
`;

export default (
  { fieldId, fieldValue, taskId }: updateTaskBoolFieldMutationInput,
): Promise<updateTaskBoolFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, fieldValue, taskId } };

  commitMutation<updateTaskBoolFieldMutation>(
    environment,
    {
      // @ts-ignore
      mutation,
      variables,
      onCompleted,
      onError,
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const fieldRecord = proxyStore.get(fieldId);
        const valueRecord = fieldRecord && fieldRecord.getLinkedRecord('value');

        if (valueRecord) {
          valueRecord.setValue(fieldValue.bool, 'bool');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskBoolField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedFieldValue');
        const fieldRecord = store.get(fieldId);

        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    },
  );
});
