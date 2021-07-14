import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useChoiceFieldFragment$key } from './__generated__/useChoiceFieldFragment.graphql';

const query = graphql`
  fragment useChoiceFieldFragment on Field {
    id
    fieldId
    meta {
      ... on ChoiceFieldMeta {
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
    }
    value {
      ... on ChoiceFieldValue {
        id
      }
    }
  }
`;

export default (data: useChoiceFieldFragment$key) => useSuspenseFragment(query, data);
