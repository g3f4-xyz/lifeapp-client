import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskListStatusFilterSettingMutation,
  UpdateTaskListStatusFilterSettingInput,
  updateTaskListStatusFilterSettingMutationResponse,
} from './__generated__/updateTaskListStatusFilterSettingMutation.graphql';

const mutation = graphql`
  mutation updateTaskListStatusFilterSettingMutation(
    $input: UpdateTaskListStatusFilterSettingInput!
  ) {
    updateTaskListStatusFilterSetting(input: $input) {
      clientMutationId
      status
    }
  }
`;

export default (
  { status }: UpdateTaskListStatusFilterSettingInput,
  { parentID }: { parentID: string },
): Promise<updateTaskListStatusFilterSettingMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { status } };

    commitMutation<updateTaskListStatusFilterSettingMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const parentRecord = proxyStore.get(parentID);
        const taskListRecord = parentRecord && parentRecord.getLinkedRecord('taskList');
        const filtersRecord = taskListRecord && taskListRecord.getLinkedRecord('filters');

        if (filtersRecord) {
          filtersRecord.setValue(status, 'status');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskListStatusFilterSetting');
        const parentRecord = store.get(parentID);
        const taskListRecord = parentRecord && parentRecord.getLinkedRecord('taskList');
        const filtersRecord = taskListRecord && taskListRecord.getLinkedRecord('filters');

        if (filtersRecord && mutationRecord) {
          filtersRecord.setValue(mutationRecord.getValue('status'), 'status');
        }
      },
    });
  });
