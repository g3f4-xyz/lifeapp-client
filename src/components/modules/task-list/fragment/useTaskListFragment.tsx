import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import { useTaskListFragment$key } from './__generated__/useTaskListFragment.graphql';

const query = graphql`
  fragment useTaskListFragment on Task {
    id
    typeId
    fields {
      fieldId
      value {
        ...useSliderFieldFragmentValue @relay(mask: false)
        ...useSwitchFieldFragmentValue @relay(mask: false)
        ...useChoiceFieldFragmentValue @relay(mask: false)
        ...useTextFieldFragmentValue @relay(mask: false)
      }
    }
  }
`;

export default (data: useTaskListFragment$key) => useFragment(query, data);
