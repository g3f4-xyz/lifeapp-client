import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import {
  useSliderFieldFragment,
  useSliderFieldFragment$key,
} from './__generated__/useSliderFieldFragment.graphql';

graphql`
  fragment useSliderFieldFragmentMeta on SliderFieldMeta {
    fieldType
    label
    disabled
    required
    max
    min
    step
  }
`;

graphql`
  fragment useSliderFieldFragmentValue on SliderFieldValue {
    progress
  }
`;

const query = graphql`
  fragment useSliderFieldFragment on Field {
    id
    fieldId
    meta {
      ...useSliderFieldFragmentMeta @relay(mask: false)
    }
    value {
      ...useSliderFieldFragmentValue @relay(mask: false)
    }
  }
`;

export default (data: useSliderFieldFragment$key): useSliderFieldFragment =>
  useFragment<useSliderFieldFragment$key>(query, data);
