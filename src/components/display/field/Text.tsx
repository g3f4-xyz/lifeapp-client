import { TextField } from '@material-ui/core';
import { convertToTimeZone, formatToTimeZone } from 'date-fns-timezone';
import React, { ChangeEvent, FC } from 'react';
import { DATE_TIME_FORMAT } from '../../../constans';
import FieldContainer from '../../containers/field-container/FieldContainer';

interface TextProps {
  value?: string | null;
  label?: string | null;
  helperText?: string | null;
  max?: number | null;
  min?: number | null;
  minLength?: number | null;
  maxLength?: number | null;
  required?: boolean | null;
  inputType?: string | null;

  onChange(value?: string): void;
}

const formatInputValue = (
  value?: string | null,
  inputType?: string | null,
): string | undefined | null => {
  if (value && inputType === 'datetime-local') {
    return formatToTimeZone(value, DATE_TIME_FORMAT, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  }

  return value;
};
const parseInputValue = (value?: string, inputType?: string | null): string | undefined => {
  if (value && inputType === 'datetime-local') {
    return convertToTimeZone(value, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }).toISOString();
  }

  return value;
};
const Text: FC<TextProps> = (props) => {
  const { value, max, maxLength, min, minLength, required, inputType, label, helperText } = props;
  const handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const parsedValue = parseInputValue(event.target.value, inputType);

    props.onChange(parsedValue);
  };

  return (
    <FieldContainer>
      <TextField
        label={label}
        required={required as boolean | undefined}
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
