// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useTaskListFragment,
  useTaskListFragment$ref,
} from './__generated__/useTaskListFragment.graphql';

const query = graphql`
  fragment useTaskListFragment on TaskType {
    id
    taskType
    fields {
      ...SliderFieldFragment_data @relay(mask: false)
      ...SwitchFieldFragment_data @relay(mask: false)
      ...ChoiceFieldFragment_data @relay(mask: false)
      ...TextFieldFragment_data @relay(mask: false)
      ...NestedFieldFragment_data @relay(mask: false)
    }
  }
`;

export default (data: useTaskListFragment$ref): Omit<useTaskListFragment, ' $refList'> =>
  useFragment(query, data);
