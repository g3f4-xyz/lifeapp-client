// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskChoiceFieldMutation,
  updateTaskChoiceFieldMutationInput,
  updateTaskChoiceFieldMutationResponse,
} from './__generated__/updateTaskChoiceFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskChoiceFieldMutation(
    $input: updateTaskChoiceFieldMutationInput!
  ) {
    updateTaskChoiceField(input: $input) {
      fieldId
      taskId
      updatedFieldValue {
        id
      }
    }
  }
`;

export default (
  { fieldId, fieldValue, taskId }: updateTaskChoiceFieldMutationInput,
): Promise<updateTaskChoiceFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, fieldValue, taskId } };

  commitMutation<updateTaskChoiceFieldMutation>(
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
          valueRecord.setValue(fieldValue.id, 'id');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskChoiceField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedFieldValue');
        const fieldRecord = store.get(fieldId);

        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    },
  );
});
