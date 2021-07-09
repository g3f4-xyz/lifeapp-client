import React, { FC, useContext } from 'react';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Slider from '../../../display/field/Slider';
import RelayEnvironmentContext from '../../../../contexts/RelayEnvironmentContext';
import useSliderFieldFragment from './useSliderFieldFragment';
import { useTextFieldFragment$ref } from './__generated__/useTextFieldFragment.graphql';

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
  const environment = useContext(RelayEnvironmentContext);

  const handleChange = async (progress: number): Promise<void> => {
    await updateTaskFieldMutation(
      { fieldId, value: { progress }, taskId: props.taskId },
      { id },
      environment,
    );
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
