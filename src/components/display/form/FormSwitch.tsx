import { FormControlLabel, Switch } from '@material-ui/core';
import React from 'react';

interface Props {
  id: string,
  fieldId: string,
  label: string,
  checked: boolean,
  onChange: any,
}

class FormSwitch extends React.Component<Props> {
  render() {
    const { id, fieldId, label, checked, onChange } = this.props;

    return (
      <FormControlLabel
        id={id}
        control={
          <Switch
            checked={checked}
            value={fieldId}
            onChange={onChange}
          />
        }
        label={label}
      />
    )
  }
}

export default FormSwitch;
