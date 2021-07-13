import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
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

export default () => {
  const [mutate] = useMutation<useUpdateTaskListTaskTypeFilterSettingMutation>(mutation);

  return ({ taskType }: UpdateTaskListTaskTypeFilterSettingInput) =>
    mutate({
      variables: { input: { taskType } },
    });
};
