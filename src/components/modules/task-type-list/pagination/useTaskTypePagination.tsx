import graphql from 'babel-plugin-relay/macro';
import { PaginationFunction, usePagination } from 'relay-hooks';
import {
  useTaskTypePagination,
  useTaskTypePagination$ref,
} from './__generated__/useTaskTypePagination.graphql';

const query = graphql`
  fragment useTaskTypePagination on TaskTypes {
    id
    list(first: $count, after: $after) @connection(key: "TaskTypeConnection_list") {
      edges {
        node {
          id
          order
          ...useTaskTypeFragment
        }
      }
    }
  }
`;

export default (
  data: useTaskTypePagination$ref,
): [Omit<useTaskTypePagination, ' $refType'>, PaginationFunction<useTaskTypePagination>] =>
  usePagination(query, data);
