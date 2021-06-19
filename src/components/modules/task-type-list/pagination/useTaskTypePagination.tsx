// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { usePagination } from 'relay-hooks';
import { PaginationFunction } from 'relay-hooks/lib/useOssFragment';
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
): [Omit<useTaskTypePagination, ' $refType'>, PaginationFunction] => usePagination(query, data);
