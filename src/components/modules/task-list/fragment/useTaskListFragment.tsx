import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useTaskListFragment,
  useTaskListFragment$ref,
} from './__generated__/useTaskListFragment.graphql';

const query = graphql`
  fragment useTaskListFragment on Task {
    id
    typeId
    fields {
      ...useSliderFieldFragment @relay(mask: false)
      ...useSwitchFieldFragment @relay(mask: false)
      ...useChoiceFieldFragment @relay(mask: false)
      ...useTextFieldFragment @relay(mask: false)
      ...useNestedFieldFragment @relay(mask: false)
    }
  }
`;

export default (data: useTaskListFragment$ref): Omit<useTaskListFragment, ' $refList'> =>
  useFragment(query, data);
