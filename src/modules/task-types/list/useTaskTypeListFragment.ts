import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useTaskTypeListFragment$key } from './__generated__/useTaskTypeListFragment.graphql';

const query = graphql`
  fragment useTaskTypeListFragment on TaskTypes {
    id
    list {
      id
      order
      ...useTaskTypeFragment
    }
  }
`;

export default (data: useTaskTypeListFragment$key) => useSuspenseFragment(query, data);
