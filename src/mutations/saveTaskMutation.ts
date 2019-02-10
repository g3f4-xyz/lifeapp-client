// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
// import { RecordProxy, RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  saveTaskMutation,
  saveTaskMutationInput,
  saveTaskMutationResponse,
} from './__generated__/saveTaskMutation.graphql';

// const updateValueRecord = (record: any, value: any, key: any): any => {
//   record.getLinkedRecord('value').setValue(value, key);
// };

const mutation = graphql`
  mutation saveTaskMutation(
  $input: saveTaskMutationInput!
  ) {
    saveTask(input: $input) {
      # Aktualnie serwer zwraca null przez co za pewne nie działa jakiś mechanizm relay
      clientMutationId
      newTaskEdge {
        node {
          id
          fields {
            fieldId
            format
            helperText
            label
            meta {
              ... on BoolMetaType {
                required
              }
              ... on ChoiceMetaType {
                defaultValue
                options {
                  text
                  value
                }
                required
              }
              ... on MultipleChoiceWithParentType {
                defaultValue
                optionsSet {
                  customValueOptionMask
                  options {
                    text
                    value
                  }
                  parentValue
                }
                parentID
              }
              ... on NumberMetaType {
                required
                min
                max
              }
              ... on TextMetaType {
                required
                minLen
                maxLen
              }
            }
            order
            type
            value {
              ... on BoolValueType {
                bool
              }
              ... on ChoiceValueType {
                id
              }
              ... on MultipleChoiceWithParentValueType {
                customValueOptionValue
                ids
                parentValue
              }
              ... on NumberValueType {
                number
              }
              ... on TextValueType {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default (
  { isNew, task, parentID }: saveTaskMutationInput & { parentID: string },
): Promise<saveTaskMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { isNew, task } };
  const configs = isNew ? [{
    parentID,
    type: 'RANGE_ADD',
    connectionInfo: [{
      key: 'TaskList_list',
      rangeBehavior: 'prepend',
    }],
    edgeName: 'newTaskEdge',
  }] : [];

  commitMutation<saveTaskMutation>(
    environment,
    {
      // @ts-ignore
      configs,
      mutation,
      variables,
      onCompleted,
      onError,
      // optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
      //   if (isNew) {
      //     throw { error: 'Brak implementacji' };
      //   } else {
      //     const fieldsRecords = proxyStore.get(task.id).getLinkedRecords('fields');
      //
      //     fieldsRecords.forEach((record: RecordProxy) => {
      //       const format = record.getValue('format');
      //       const fieldId = record.getValue('fieldId');
      //       const { id, text } = task.fields.find((field: any) => fieldId === field.fieldId).value;
      //
      //       if (['ELIXIR'].includes(format)) {
      //         updateValueRecord(record, text, 'text');
      //       } else if (['CHOICE'].includes(format)) {
      //         updateValueRecord(record, id, 'id');
      //       }
      //     });
      //   }
      // },
      // updater: (proxyStore: RecordSourceSelectorProxy) => {
      //   if (!isNew) {
      //     const fieldsRecords = proxyStore.get(task.id).getLinkedRecords('fields');
      //     const mutationRootRecord = proxyStore.getRootField('saveTask');
      //
      //     if (mutationRootRecord) {
      //       const mutatedFieldsRecords = mutationRootRecord
      //         .getLinkedRecord('newTaskEdge')
      //         .getLinkedRecord('node')
      //         .getLinkedRecords('fields');
      //
      //       fieldsRecords.forEach((record: any) => {
      //         const format = record.getValue('format');
      //         const fieldId = record.getValue('fieldId');
      //         const mutatedValue = mutatedFieldsRecords
      //           .find((fieldRecord: RecordProxy) => fieldRecord.getValue('fieldId') === fieldId)
      //           .getLinkedRecord('value');
      //
      //         if (['ELIXIR'].includes(format)) {
      //           updateValueRecord(record, mutatedValue.getValue('text'), 'text');
      //         } else if (['CHOICE'].includes(format)) {
      //           updateValueRecord(record, mutatedValue.getValue('id'), 'id');
      //         }
      //       });
      //     }
      //   }
      // },
    },
  );
});
