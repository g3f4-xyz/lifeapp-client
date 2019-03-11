// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskListTaskTypeFilterSettingMutation,
  updateTaskListTaskTypeFilterSettingMutationInput,
  updateTaskListTaskTypeFilterSettingMutationResponse,
} from './__generated__/updateTaskListTaskTypeFilterSettingMutation.graphql';

const mutation = graphql`
  mutation updateTaskListTaskTypeFilterSettingMutation(
  $input: updateTaskListTaskTypeFilterSettingMutationInput!
  ) {
    updateTaskListTaskTypeFilterSetting(input: $input) {
      clientMutationId
      taskType
    }
  }
`;

export default (
  { taskType }: updateTaskListTaskTypeFilterSettingMutationInput,
  { parentID }: { parentID: string },
): Promise<updateTaskListTaskTypeFilterSettingMutationResponse> => new Promise((onCompleted, onError): void => {
  const variables = { input: { taskType } };

  commitMutation<updateTaskListTaskTypeFilterSettingMutation>(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError,
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const parentRecord = proxyStore.get(parentID);
        const taskListRecord = parentRecord && parentRecord.getLinkedRecord('taskList');
        const filtersRecord = taskListRecord && taskListRecord.getLinkedRecord('filters');

        if (filtersRecord) {
          filtersRecord.setValue(taskType, 'taskType');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskListTaskTypeFilterSetting');
        const parentRecord = store.get(parentID);
        const taskListRecord = parentRecord && parentRecord.getLinkedRecord('taskList');
        const filtersRecord = taskListRecord && taskListRecord.getLinkedRecord('filters');

        if (filtersRecord && mutationRecord) {
          filtersRecord.setValue(mutationRecord.getValue('taskType'), 'taskType');
        }
      },
    },
  );
});
