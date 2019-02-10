import { FormHelperText, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import { SelectProps } from '@material-ui/core/Select';
import React, { Fragment } from 'react';

export interface FormSelectProps extends SelectProps {
  fieldId: string;
  helperText: string;
  label: string;
  options: Array<{ text: string, value: string }>;
}

class FormSelect extends React.Component<FormSelectProps> {
  render(): React.ReactNode {
    const { fieldId, helperText, id, label, options, ...selectProps } = this.props;

    return (
      <Fragment>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          {...selectProps}
          input={<Input name={fieldId} id={id} />}
        >
        {options.map(({ value, text }) => (
          <MenuItem
            key={value}
            value={value}
          >{text}</MenuItem>
        ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </Fragment>
    );
  }
}

export default FormSelect;
