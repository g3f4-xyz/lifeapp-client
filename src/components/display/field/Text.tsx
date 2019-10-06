import { TextField } from '@material-ui/core';
import { convertToTimeZone, formatToTimeZone } from 'date-fns-timezone';
import React, { ChangeEvent, FC } from 'react';
import { DATE_TIME_FORMAT } from '../../../constans';
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

  onChange(value?: string): void;
}

const formatInputValue = (value?: string, inputType?: string): string | undefined => {
  if (value && inputType === 'datetime-local') {
    return formatToTimeZone(value, DATE_TIME_FORMAT, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  }

  return value;
};

const parseInputValue = (value?: string, inputType?: string): string | undefined => {
  if (value && inputType === 'datetime-local') {
    return convertToTimeZone(value, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }).toISOString();
  }

  return value;
};

const Text: FC<TextProps> = props => {
  const { value, max, maxLength, min, minLength, required, inputType, label, helperText } = props;

  const handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const parsedValue = parseInputValue(event.target.value, inputType);

    props.onChange(parsedValue);
  };

  return (
    <FieldContainer>
      <TextField
        label={label}
        required={required}
        InputLabelProps={{ shrink: true }}
        inputProps={{ type: inputType, max, maxLength, min, minLength }}
        helperText={helperText}
        value={formatInputValue(value, inputType)}
        onChange={handleChange}
        fullWidth
      />
    </FieldContainer>
  );
};

export default Text;
