import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Slider from '../../../display/field/Slider';
// eslint-disable-next-line @typescript-eslint/camelcase
import { SliderFieldFragment_data } from './__generated__/SliderFieldFragment_data.graphql';

interface SliderFieldProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: SliderFieldFragment_data;
  taskId: string;
}

const SliderField: FC<SliderFieldProps> = props => {
  const { data } = props;
  const {
    value: { progress },
    meta: { label, disabled, max, min, step },
  } = data;

  const handleChange = async (progress: number): Promise<void> => {
    const {
      taskId,
      data: { fieldId, id },
    } = props;

    await updateTaskFieldMutation({ fieldId, value: { progress }, taskId }, { id });
  };

  return (
    <Slider
      disabled={disabled || undefined}
      // @ts-ignore
      value={progress}
      // @ts-ignore
      label={label}
      max={max || undefined}
      min={min || undefined}
      step={step || undefined}
      onChange={handleChange}
    />
  );
};

graphql`
  fragment SliderFieldFragmentMeta on SliderFieldMeta {
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
  fragment SliderFieldFragmentValue on SliderFieldValue {
    progress
  }
`;

export default createFragmentContainer<SliderFieldProps>(SliderField, {
  data: graphql`
    fragment SliderFieldFragment_data on Field {
      id
      fieldId
      meta {
        ...SliderFieldFragmentMeta @relay(mask: false)
      }
      value {
        ...SliderFieldFragmentValue @relay(mask: false)
      }
    }
  `,
});
