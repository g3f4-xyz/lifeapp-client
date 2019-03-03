import { TextField } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import FieldContainer from '../../containers/FieldContainer';

interface Props {
  value?: string;
  label?: string;
  helperText?: string;
  max?: number;
  min?: number;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  inputType?: string;

  onChange(value: string): void;
}

export default class Text extends React.Component<Props> {
  render(): React.ReactNode {
    const { value, max, maxLength, min, minLength, required, inputType, label, helperText } = this.props;

    return (
      <FieldContainer>
        <TextField
          label={label}
          required={required}
          InputLabelProps={{ shrink: true }}
          inputProps={{ type: inputType, max, maxLength, min, minLength }}
          helperText={helperText}
          value={value}
          onChange={this.handleChange}
          fullWidth
        />
      </FieldContainer>
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    this.props.onChange(event.target.value);
  };
}
