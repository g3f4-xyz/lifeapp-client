// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import { useTaskFragment, useTaskFragment$ref } from './__generated__/useTaskFragment.graphql';

const query = graphql`
  fragment useTaskFragment on TaskType {
    id
    fields {
      __typename
      ... on ChoiceFieldType {
        fieldId
        fieldType
        order
      }
      ... on SwitchFieldType {
        fieldId
        fieldType
        order
      }
      ... on SliderFieldType {
        fieldId
        fieldType
        order
      }
      ... on NestedFieldType {
        fieldId
        fieldType
        order
      }
      ... on TextFieldType {
        fieldId
        fieldType
        order
      }
      ...SliderFieldFragment_data
      ...SwitchFieldFragment_data
      ...ChoiceFieldFragment_data
      ...TextFieldFragment_data
      ...NestedFieldFragment_data
    }
  }
`;

export default (data: useTaskFragment$ref): Omit<useTaskFragment, ' $refType'> =>
  useFragment(query, data);
