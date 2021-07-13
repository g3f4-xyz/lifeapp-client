import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useSwitchFieldFragment,
  useSwitchFieldFragment$key,
} from './__generated__/useSwitchFieldFragment.graphql';

graphql`
  fragment useSwitchFieldFragmentMeta on SwitchFieldMeta {
    fieldType
    label
    disabled
    required
  }
`;

graphql`
  fragment useSwitchFieldFragmentValue on SwitchFieldValue {
    enabled
  }
`;

const query = graphql`
  fragment useSwitchFieldFragment on Field {
    id
    fieldId
    meta {
      ...useSwitchFieldFragmentMeta @relay(mask: false)
    }
    value {
      ...useSwitchFieldFragmentValue @relay(mask: false)
    }
  }
`;

export default (data: useSwitchFieldFragment$key): Omit<useSwitchFieldFragment, ' $refType'> =>
  useFragment(query, data);