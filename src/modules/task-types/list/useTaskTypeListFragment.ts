import graphql from 'babel-plugin-relay/macro';
import { useSuspenseFragment } from 'relay-hooks';
import { useTaskTypeListFragment$key } from './__generated__/useTaskTypeListFragment.graphql';

const query = graphql`
  fragment useTaskTypeListFragment on TaskTypes {
    list {
      typeId
      ...useTaskTypeFragment
    }
  }
`;

export default (data: useTaskTypeListFragment$key) => useSuspenseFragment(query, data);
