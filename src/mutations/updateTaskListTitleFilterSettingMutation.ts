import graphql from 'babel-plugin-relay/macro';
import { commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';
import environment from '../environment';
import {
  updateTaskListTitleFilterSettingMutation,
  UpdateTaskListTitleFilterSettingInput,
  updateTaskListTitleFilterSettingMutationResponse,
} from './__generated__/updateTaskListTitleFilterSettingMutation.graphql';

const mutation = graphql`
  mutation updateTaskListTitleFilterSettingMutation(
    $input: UpdateTaskListTitleFilterSettingInput!
  ) {
    updateTaskListTitleFilterSetting(input: $input) {
      clientMutationId
      title
    }
  }
`;

export default (
  { title }: UpdateTaskListTitleFilterSettingInput,
  { parentID }: { parentID: string },
): Promise<updateTaskListTitleFilterSettingMutationResponse> =>
  new Promise((onCompleted, onError): void => {
    const variables = { input: { title } };

    commitMutation<updateTaskListTitleFilterSettingMutation>(environment, {
      mutation,
      variables,
      onCompleted,
      onError,
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
  });
