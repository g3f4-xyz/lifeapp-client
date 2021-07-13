import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'relay-hooks';
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

export default () => {
  const [mutate] = useMutation<useUpdateTaskListTitleFilterSettingMutation>(mutation);

  return ({ title }: UpdateTaskListTitleFilterSettingInput) =>
    mutate({
      variables: { input: { title } },
    });
};
