// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskTextFieldMutation,
  updateTaskTextFieldMutationInput,
  updateTaskTextFieldMutationResponse
} from './__generated__/updateTaskTextFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskTextFieldMutation(
    $input: updateTaskTextFieldMutationInput!
  ) {
    updateTaskTextField(input: $input) {
      fieldId
      taskId
      updatedFieldValue {
        text
      }
    }
  }
`;

export default (
  { fieldId, fieldValue, taskId }: updateTaskTextFieldMutationInput,
): Promise<updateTaskTextFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, fieldValue, taskId } };

  commitMutation<updateTaskTextFieldMutation>(
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
          valueRecord.setValue(fieldValue.text, 'text');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskTextField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedFieldValue');
        const fieldRecord = store.get(fieldId);

        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    },
  );
});
