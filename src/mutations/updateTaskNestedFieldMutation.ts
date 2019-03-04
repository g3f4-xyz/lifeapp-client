// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskNestedFieldMutation,
  updateTaskNestedFieldMutationInput,
  updateTaskNestedFieldMutationResponse,
} from './__generated__/updateTaskNestedFieldMutation.graphql';

const mutation = graphql`
  mutation updateTaskNestedFieldMutation(
    $input: updateTaskNestedFieldMutationInput!
  ) {
    updateTaskNestedField(input: $input) {
      clientMutationId
      fieldId
      taskId
      updatedFieldValue {
        ownValue {
          ... on ChoiceValueType {
            id
          }
          ... on SwitchValueType {
            enabled
          }
          ... on TextValueType {
            text
          }
        }
        childrenValue {
          ownValue {
            ... on NestedValueType {
              ownValue {
                ... on ChoiceValueType {
                  id
                }
                ... on SwitchValueType {
                  enabled
                }
                ... on TextValueType {
                  text
                }
              }
              childrenValue {
                ownValue {
                  ... on ChoiceValueType {
                    id
                  }
                  ... on SwitchValueType {
                    enabled
                  }
                  ... on TextValueType {
                    text
                  }
                }
              }
            }
            ... on ChoiceValueType {
              id
            }
            ... on SwitchValueType {
              enabled
            }
            ... on TextValueType {
              text
            }
          }
          childrenValue {
            ownValue {
              ... on ChoiceValueType {
                id
              }
              ... on SwitchValueType {
                enabled
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
  { fieldId, fieldValue, taskId }: updateTaskNestedFieldMutationInput,
): Promise<updateTaskNestedFieldMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { fieldId, fieldValue, taskId } };

  commitMutation<updateTaskNestedFieldMutation>(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError,
      // optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
      //   const fieldRecord = proxyStore.get(fieldId);
      //   const valueRecord = fieldRecord && fieldRecord.getLinkedRecord('value');
      //
      //   if (valueRecord) {
      //     valueRecord.setValue(fieldValue.ownValue, 'ownValue');
      //   }
      // },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskNestedField');
        const updatedFieldValue = mutationRecord && mutationRecord.getLinkedRecord('updatedFieldValue');
        const fieldRecord = store.get(fieldId);

        if (fieldRecord && updatedFieldValue) {
          fieldRecord.setLinkedRecord(updatedFieldValue, 'value');
        }
      },
    },
  );
});
