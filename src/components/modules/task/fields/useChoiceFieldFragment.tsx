import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useChoiceFieldFragment,
  useChoiceFieldFragment$ref,
} from './__generated__/useChoiceFieldFragment.graphql';

graphql`
  fragment useChoiceFieldFragmentMeta on ChoiceFieldMeta {
    fieldType
    helperText
    label
    defaultValue
    options {
      text
      value
    }
    required
  }
`;

graphql`
  fragment useChoiceFieldFragmentValue on ChoiceFieldValue {
    id
  }
`;

const query = graphql`
  fragment useChoiceFieldFragment on Field {
    id
    fieldId
    meta {
      ...useChoiceFieldFragmentMeta @relay(mask: false)
    }
    value {
      ...useChoiceFieldFragmentValue @relay(mask: false)
    }
  }
`;

export default (data: useChoiceFieldFragment$ref): Omit<useChoiceFieldFragment, ' $refType'> =>
  useFragment(query, data);
