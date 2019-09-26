// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useTaskTypeFragment,
  useTaskTypeFragment$ref,
} from './__generated__/useTaskTypeFragment.graphql';

const query = graphql`
  fragment useTaskTypeFragment on TaskTypeType {
    id
    typeId
    label
    description
  }
`;

export default (data: useTaskTypeFragment$ref): Omit<useTaskTypeFragment, ' $refType'> =>
  useFragment(query, data);
