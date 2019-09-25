// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
// eslint-disable-next-line @typescript-eslint/camelcase
import { TaskTypeListPagination_data$ref } from './__generated__/TaskTypeListPagination_data.graphql';
import { useTaskTypeFragment } from './__generated__/useTaskTypeFragment.graphql';

const query = graphql`
  fragment useTaskTypeFragment on TaskTypeType {
    id
    typeId
    label
    description
  }
`;

// eslint-disable-next-line @typescript-eslint/camelcase
export default (data: TaskTypeListPagination_data$ref): Omit<useTaskTypeFragment, ' $refType'> =>
  useFragment(query, data);
