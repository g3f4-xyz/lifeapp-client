import { FormHelperText, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import { SelectProps } from '@material-ui/core/Select';
import React, { Fragment } from 'react';

export interface FormSelectProps extends SelectProps {
  fieldId: any;
  helperText: any;
  label: any;
  options: any;
}

class FormSelect extends React.Component<FormSelectProps> {
  render() {
    const { fieldId, helperText, id, label, options, ...selectProps } = this.props;

    return (
      <Fragment>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          {...selectProps}
          input={<Input name={fieldId} id={id} />}
        >
        {options.map(({ value, text }: any, key: any) => (
          <MenuItem
            key={key}
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
