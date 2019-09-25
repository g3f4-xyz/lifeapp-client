import { TextField } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';
import FieldContainer from '../../containers/field-container/FieldContainer';

interface TextProps {
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

const Text: FC<TextProps> = props => {
  const { value, max, maxLength, min, minLength, required, inputType, label, helperText } = props;

  const handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    props.onChange(event.target.value);
  };

  return (
    <FieldContainer>
      <TextField
        label={label}
        required={required}
        InputLabelProps={{ shrink: true }}
        inputProps={{ type: inputType, max, maxLength, min, minLength }}
        helperText={helperText}
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </FieldContainer>
  );
};

export default Text;
