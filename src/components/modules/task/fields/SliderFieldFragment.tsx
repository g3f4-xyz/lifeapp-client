import React, { FC } from 'react';
import Slider from '../../../display/field/Slider';
import { useSliderFieldFragment$key } from './__generated__/useSliderFieldFragment.graphql';
import useSliderFieldFragment from './useSliderFieldFragment';
import useUpdateTaskFieldMutation from './useUpdateTaskFieldMutation';

interface SliderFieldProps {
  data: useSliderFieldFragment$key;
  taskId: string;
}

const SliderField: FC<SliderFieldProps> = (props) => {
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
      value={progress as number | number[]}
      label={label}
      max={max || undefined}
      min={min || undefined}
      step={step || undefined}
      onChange={handleChange}
    />
  );
};

export default SliderField;
