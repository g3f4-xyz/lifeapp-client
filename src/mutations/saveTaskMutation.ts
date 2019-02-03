// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import environment from '../environment';

const updateValueRecord = (record: any, value: any, key: any): any => {
  record.getLinkedRecord('value').setValue(value, key);
};

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

export default ({ isNew, task, parentID }: any): any => new Promise((resolve: any, reject: any): any => {
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

  commitMutation(
    environment,
    {
      // @ts-ignore
      configs,
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
      optimisticUpdater: (proxyStore: any) => {
        if (isNew) {
          throw { error: 'Brak implementacji' };
        } else {
          const fieldsRecords = proxyStore.get(task.id).getLinkedRecords('fields');

          fieldsRecords.forEach((record: any) => {
            const format = record.getValue('format');
            const fieldId = record.getValue('fieldId');
            const { id, text } = task.fields.find((field: any) => fieldId === field.fieldId).value;

            if (['ELIXIR'].includes(format)) {
              updateValueRecord(record, text, 'text');
            } else if (['CHOICE'].includes(format)) {
              updateValueRecord(record, id, 'id');
            }
          });
        }
      },
      updater: (proxyStore: any) => {
        if (!isNew) {
          const fieldsRecords = proxyStore.get(task.id).getLinkedRecords('fields');
          const mutationRootRecord = proxyStore.getRootField('saveTask');
          const mutatedFieldsRecords = mutationRootRecord
            .getLinkedRecord('newTaskEdge')
            .getLinkedRecord('node')
            .getLinkedRecords('fields');

          fieldsRecords.forEach((record: any) => {
            const format = record.getValue('format');
            const fieldId = record.getValue('fieldId');
            const mutatedValue = mutatedFieldsRecords
              .find((record: any) => record.getValue('fieldId') === fieldId)
              .getLinkedRecord('value');

            if (['ELIXIR'].includes(format)) {
              updateValueRecord(record, mutatedValue.getValue('text'), 'text');
            } else if (['CHOICE'].includes(format)) {
              updateValueRecord(record, mutatedValue.getValue('id'), 'id');
            }
          });
        }
      },
    },
  );
});
