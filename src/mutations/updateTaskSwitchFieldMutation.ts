// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskSwitchFieldMutation,
  updateTaskSwitchFieldMutationInput,
  updateTaskSwitchFieldMutationResponse,
} from './__generated__/updateTaskSwitchFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskSwitchFieldMutation(
    $input: updateTaskSwitchFieldMutationInput!
  ) {
    updateTaskSwitchField(input: $input) {
      fieldId
      taskId
      updatedFieldValue {
        enabled
      }
    }
  }
`;

export default (
  { fieldId, fieldValue, taskId }: updateTaskSwitchFieldMutationInput,
): Promise<updateTaskSwitchFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, fieldValue, taskId } };

  commitMutation<updateTaskSwitchFieldMutation>(
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
          valueRecord.setValue(fieldValue.enabled, 'enabled');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskSwitchField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedFieldValue');
        const fieldRecord = store.get(fieldId);

        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    },
  );
});
