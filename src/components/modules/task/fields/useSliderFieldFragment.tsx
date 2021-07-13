import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useSliderFieldFragment,
  useSliderFieldFragment$key,
} from './__generated__/useSliderFieldFragment.graphql';

const query = graphql`
  fragment useSliderFieldFragment on Field {
    id
    fieldId
    meta {
      ... on SliderFieldMeta {
        fieldType
        label
        disabled
        required
        max
        min
        step
      }
    }
    value {
      ... on SliderFieldValue {
        progress
      }
    }
  }
`;

export default (data: useSliderFieldFragment$key): useSliderFieldFragment =>
  useFragment<useSliderFieldFragment$key>(query, data);
