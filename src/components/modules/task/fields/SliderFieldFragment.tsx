import React, { FC } from 'react';
import useUpdateTaskFieldMutation from './useUpdateTaskFieldMutation';
import Slider from '../../../display/field/Slider';
import { useTextFieldFragment$ref } from './__generated__/useTextFieldFragment.graphql';
import useSliderFieldFragment from './useSliderFieldFragment';

interface SliderFieldProps {
  data: useTextFieldFragment$ref;
  taskId: string;
}

const SliderField: FC<SliderFieldProps> = props => {
  const {
    id,
    fieldId,
    value: { progress },
    meta: { label, disabled, max, min, step },
  } = useSliderFieldFragment(props.data);
  const mutate = useUpdateTaskFieldMutation(id);

  const handleChange = async (progress: number): Promise<void> => {
    await mutate({ fieldId, value: { progress }, taskId: props.taskId });
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

export default SliderField;
