import { FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import FieldContainer from '../../containers/FieldContainer';

interface Props {
  value?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  options: ReadonlyArray<{ readonly text: string; readonly value: string; } | null> | undefined;

  onChange(value: string): void;
}

export default class Choice extends React.Component<Props> {
  render(): React.ReactNode {
    const { label, value, helperText, options } = this.props;

    if (!options) {
      throw new Error('no options');
    }

    return (
      <FieldContainer>
        {label && (
          <InputLabel>{label}</InputLabel>
        )}
        <Select value={value} onChange={this.handleChange}>
          {options.map((option) => option && (
            <MenuItem
              key={option.value}
              value={option.value}
            >{option.text}</MenuItem>
          ))}
        </Select>
        {helperText && (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </FieldContainer>
    );
  }

  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(event.target.value);
  };
}
