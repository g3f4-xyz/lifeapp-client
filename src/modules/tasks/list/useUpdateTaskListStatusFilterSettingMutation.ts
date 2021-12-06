import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
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
      taskStatus
    }
  }
`;

export default () => {
  const [mutate] = useMutation<useUpdateTaskListStatusFilterSettingMutation>(mutation);

  return ({ taskStatus }: UpdateTaskListStatusFilterSettingInput) =>
    mutate({
      variables: { input: { taskStatus } },
    });
};
