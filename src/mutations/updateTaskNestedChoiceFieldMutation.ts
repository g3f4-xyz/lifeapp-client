// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskNestedChoiceFieldMutation,
  updateTaskNestedChoiceFieldMutationInput,
  updateTaskNestedChoiceFieldMutationResponse,
} from './__generated__/updateTaskNestedChoiceFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskNestedChoiceFieldMutation(
    $input: updateTaskNestedChoiceFieldMutationInput!
  ) {
    updateTaskNestedChoiceField(input: $input) {
      clientMutationId
      fieldId
      taskId
      updatedFieldValue {
        ownValue
        childrenValue {
          ownValue
          childrenValue {
            ownValue
          }
        }
      }
    }
  }
`;

export default (
  { fieldId, fieldValue, taskId }: updateTaskNestedChoiceFieldMutationInput,
): Promise<updateTaskNestedChoiceFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, fieldValue, taskId } };

  commitMutation<updateTaskNestedChoiceFieldMutation>(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError,
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const fieldRecord = proxyStore.get(fieldId);
        const valueRecord = fieldRecord && fieldRecord.getLinkedRecord('value');

        if (valueRecord) {
          valueRecord.setValue(fieldValue.ownValue, 'ownValue');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskNestedChoiceField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedFieldValue');
        const fieldRecord = store.get(fieldId);

        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    },
  );
});
