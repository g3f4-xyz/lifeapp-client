import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useTaskFragment$key } from './__generated__/useTaskFragment.graphql';

const query = graphql`
  fragment useTaskFragment on Task {
    id
    fields {
      __typename
      fieldId
      fieldType
      order
      ...useSliderFieldFragment
      ...useSwitchFieldFragment
      ...useChoiceFieldFragment
      ...useTextFieldFragment
      ...useNestedFieldFragment
    }
  }
`;

export default (data: useTaskFragment$key) => useSuspenseFragment(query, data);
