import MaterialSlider, { SliderProps as MaterialSliderProps } from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
import FieldContainer from '../../containers/field-container/FieldContainer';

interface SliderProps
  extends Pick<MaterialSliderProps, 'max' | 'min' | 'step' | 'value' | 'disabled'> {
  label?: string | null;
  required?: boolean;

  onChange(value: number): void;
}

const Slider: FC<SliderProps> = (props) => {
  const { max, min, step, value, disabled, label } = props;
  const handleChange = async (
    _event: React.ChangeEvent<HTMLInputElement>,
    value?: number | number[],
  ): Promise<void> => {
    props.onChange(value as number);
  };

  return (
    <FieldContainer>
      <Typography>{label}</Typography>
      <br />
      <MaterialSlider
        value={value}
        max={max}
        min={min}
        step={step}
        disabled={disabled}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onChange={handleChange}
      />
    </FieldContainer>
  );
};

export default Slider;
