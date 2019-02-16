// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskPartialChoiceFieldMutation,
  updateTaskPartialChoiceFieldMutationInput,
  updateTaskPartialChoiceFieldMutationResponse,
} from './__generated__/updateTaskPartialChoiceFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskPartialChoiceFieldMutation(
    $input: updateTaskPartialChoiceFieldMutationInput!
  ) {
    updateTaskPartialChoiceField(input: $input) {
      fieldId
      taskId
      updatedFieldValue {
        id
      }
      partial {
        ...FieldFragment
      }
    }
  }
`;

export default (
  { fieldId, fieldValue, taskId }: updateTaskPartialChoiceFieldMutationInput,
): Promise<updateTaskPartialChoiceFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, fieldValue, taskId } };

  commitMutation<updateTaskPartialChoiceFieldMutation>(
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
        const mutationRecord = store.getRootField('updateTaskPartialChoiceField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedFieldValue');
        const fieldRecord = store.get(fieldId);

        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    },
  );
});
