import { FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { FC } from 'react';
import FieldContainer from '../../containers/field-container/FieldContainer';

interface ChoiceProps {
  value?: string;
  label?: string | null;
  helperText?: string | null;
  required?: boolean | null;
  options?: ReadonlyArray<{ readonly text: string; readonly value: string }>;

  onChange(value: string): void;
}

const Choice: FC<ChoiceProps> = props => {
  const { label, value, helperText, options } = props;

  if (!options) {
    throw new Error('no options');
  }

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    props.onChange(event.target.value as string);
  };

  return (
    <FieldContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <Select value={value} onChange={handleChange}>
        {options.map(
          option =>
            option && (
              <MenuItem key={option.value} value={option.value}>
                {option.text}
              </MenuItem>
            ),
        )}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FieldContainer>
  );
};

export default Choice;
