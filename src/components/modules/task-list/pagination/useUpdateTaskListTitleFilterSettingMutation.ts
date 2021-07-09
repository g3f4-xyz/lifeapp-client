import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import {
  UpdateTaskListTitleFilterSettingInput,
  useUpdateTaskListTitleFilterSettingMutation,
} from './__generated__/useUpdateTaskListTitleFilterSettingMutation.graphql';

const mutation = graphql`
  mutation useUpdateTaskListTitleFilterSettingMutation(
    $input: UpdateTaskListTitleFilterSettingInput!
  ) {
    updateTaskListTitleFilterSetting(input: $input) {
      clientMutationId
      title
    }
  }
`;

export default (parentID: string) => {
  const [mutate] = useMutation<useUpdateTaskListTitleFilterSettingMutation>(mutation);
  return ({ title }: UpdateTaskListTitleFilterSettingInput) =>
    mutate({
      variables: { input: { title } },
      optimisticUpdater: (proxyStore: RecordSourceSelectorProxy) => {
        const parentRecord = proxyStore.get(parentID);
        const taskListRecord = parentRecord && parentRecord.getLinkedRecord('taskList');
        const filtersRecord = taskListRecord && taskListRecord.getLinkedRecord('filters');

        if (filtersRecord) {
          filtersRecord.setValue(title, 'title');
        }
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRecord = store.getRootField('updateTaskListTitleFilterSetting');
        const parentRecord = store.get(parentID);
        const taskListRecord = parentRecord && parentRecord.getLinkedRecord('taskList');
        const filtersRecord = taskListRecord && taskListRecord.getLinkedRecord('filters');

        if (filtersRecord && mutationRecord) {
          filtersRecord.setValue(mutationRecord.getValue('title'), 'title');
        }
      },
    });
};
