import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import { useTaskTypeFragment$key } from './__generated__/useTaskTypeFragment.graphql';

const query = graphql`
  fragment useTaskTypeFragment on TaskType {
    id
    typeId
    label
    description
  }
`;

export default (data: useTaskTypeFragment$key) => useFragment(query, data);
