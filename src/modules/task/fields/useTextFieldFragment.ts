import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useTextFieldFragment$key } from './__generated__/useTextFieldFragment.graphql';

const query = graphql`
  fragment useTextFieldFragment on Field {
    id
    fieldId
    meta {
      ... on TextFieldMeta {
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
    }
    value {
      ... on TextFieldValue {
        text
      }
    }
  }
`;

export default (data: useTextFieldFragment$key) => useSuspenseFragment(query, data);
