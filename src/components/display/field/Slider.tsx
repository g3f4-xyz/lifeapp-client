import Typography from '@material-ui/core/Typography';
import MaterialSlider, { SliderProps } from '@material-ui/lab/Slider';
import React, { ChangeEvent } from 'react';
import FieldContainer from '../../containers/FieldContainer';

interface Props extends Pick<SliderProps, 'max' | 'min' | 'step' | 'value' | 'disabled'> {
  label?: string;
  required?: boolean;

  onChange(value: number): void;
}

export default class Slider extends React.Component<Props> {
  render(): React.ReactNode {
    const { max, min, step, value, disabled, label } = this.props;

    return (
      <FieldContainer>
        <Typography>{label}</Typography>
        <br />
        <MaterialSlider
          value={value}
          max={max}
          min={min}
          step={step}
          disabled={disabled!}
          onChange={this.handleChange}
        />
      </FieldContainer>
    );
  }

  private handleChange = async (_event: ChangeEvent<{}>, value: number): Promise<void> => {
    this.props.onChange(value);
  };
}
