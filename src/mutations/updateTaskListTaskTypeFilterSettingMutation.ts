import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'relay-hooks';
import { Environment, RecordSourceSelectorProxy } from 'relay-runtime';
import {
  updateTaskListTaskTypeFilterSettingMutation,
  UpdateTaskListTaskTypeFilterSettingInput,
  updateTaskListTaskTypeFilterSettingMutationResponse,
} from './__generated__/updateTaskListTaskTypeFilterSettingMutation.graphql';
import { Primitive } from 'relay-runtime/lib/store/RelayStoreTypes';

const mutation = graphql`
  mutation updateTaskListTaskTypeFilterSettingMutation(
    $input: UpdateTaskListTaskTypeFilterSettingInput!
  ) {
    updateTaskListTaskTypeFilterSetting(input: $input) {
      clientMutationId
      taskType
    }
  }
`;

export default (
  { taskType }: UpdateTaskListTaskTypeFilterSettingInput,
  { parentID }: { parentID: string },
  environment: Environment,
): Promise<updateTaskListTaskTypeFilterSettingMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { taskType } };

    commitMutation<updateTaskListTaskTypeFilterSettingMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const parentRecord = proxyStore.get(parentID);
        const taskListRecord = parentRecord && parentRecord.getLinkedRecord('taskList');
        const filtersRecord = taskListRecord && taskListRecord.getLinkedRecord('filters');

        if (filtersRecord) {
          filtersRecord.setValue(taskType as Primitive[], 'taskType');
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
    });
  });
