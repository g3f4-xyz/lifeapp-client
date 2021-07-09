import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import {
  UpdateTaskListStatusFilterSettingInput,
  useUpdateTaskListStatusFilterSettingMutation,
} from './__generated__/useUpdateTaskListStatusFilterSettingMutation.graphql';

const mutation = graphql`
  mutation useUpdateTaskListStatusFilterSettingMutation(
    $input: UpdateTaskListStatusFilterSettingInput!
  ) {
    updateTaskListStatusFilterSetting(input: $input) {
      clientMutationId
      status
    }
  }
`;

export default (parentID: string) => {
  const [mutate] = useMutation<useUpdateTaskListStatusFilterSettingMutation>(mutation);
  return ({ status }: UpdateTaskListStatusFilterSettingInput) =>
    mutate({
      variables: { input: { status } },
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
};
