import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import {
  UpdateTaskListTaskTypeFilterSettingInput,
  useUpdateTaskListTaskTypeFilterSettingMutation,
} from './__generated__/useUpdateTaskListTaskTypeFilterSettingMutation.graphql';

const mutation = graphql`
  mutation useUpdateTaskListTaskTypeFilterSettingMutation(
    $input: UpdateTaskListTaskTypeFilterSettingInput!
  ) {
    updateTaskListTaskTypeFilterSetting(input: $input) {
      clientMutationId
      taskType
    }
  }
`;

export default (parentID: string) => {
  const [mutate] = useMutation<useUpdateTaskListTaskTypeFilterSettingMutation>(mutation);
  return ({ taskType }: UpdateTaskListTaskTypeFilterSettingInput) =>
    mutate({
      variables: { input: { taskType } },
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const parentRecord = proxyStore.get(parentID);
        const taskListRecord = parentRecord && parentRecord.getLinkedRecord('taskList');
        const filtersRecord = taskListRecord && taskListRecord.getLinkedRecord('filters');

        if (filtersRecord) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
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
    });
};
