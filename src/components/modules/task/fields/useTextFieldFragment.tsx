import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useTextFieldFragment,
  useTextFieldFragment$ref,
} from './__generated__/useTextFieldFragment.graphql';

graphql`
  fragment useTextFieldFragmentMeta on TextFieldMeta {
    fieldType
    helperText
    label
    inputType
    min
    max
    maxLength
    minLength
    required
  }
`;

graphql`
  fragment useTextFieldFragmentValue on TextFieldValue {
    text
  }
`;

const query = graphql`
  fragment useTextFieldFragment on Field {
    id
    fieldId
    meta {
      ...useTextFieldFragmentMeta @relay(mask: false)
    }
    value {
      ...useTextFieldFragmentValue @relay(mask: false)
    }
  }
`;

export default (data: useTextFieldFragment$ref): Omit<useTextFieldFragment, ' $refType'> =>
  useFragment(query, data);
