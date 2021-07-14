import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useSwitchFieldFragment$key } from './__generated__/useSwitchFieldFragment.graphql';

const query = graphql`
  fragment useSwitchFieldFragment on Field {
    id
    fieldId
    meta {
      ... on SwitchFieldMeta {
        fieldType
        label
        disabled
        required
      }
    }
    value {
      ... on SwitchFieldValue {
        enabled
      }
    }
  }
`;

export default (data: useSwitchFieldFragment$key) => useSuspenseFragment(query, data);
