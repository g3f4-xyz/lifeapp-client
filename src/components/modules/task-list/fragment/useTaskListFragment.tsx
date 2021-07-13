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
        ... on SliderFieldValue {
          progress
        }
        ... on SwitchFieldValue {
          enabled
        }
        ... on ChoiceFieldValue {
          id
        }
        ... on TextFieldValue {
          text
        }
      }
    }
  }
`;

export default (data: useTaskListFragment$key) => useFragment(query, data);
