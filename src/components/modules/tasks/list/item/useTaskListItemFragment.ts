import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import { useTaskListItemFragment$key } from './__generated__/useTaskListItemFragment.graphql';

const query = graphql`
  fragment useTaskListItemFragment on Task {
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

export default (data: useTaskListItemFragment$key) => useFragment(query, data);
