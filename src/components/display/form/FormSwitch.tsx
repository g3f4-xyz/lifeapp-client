import { FormControlLabel, Switch } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

interface Props {
  id: string;
  fieldId: string;
  label: string;
  checked: boolean;
  onChange(event: ChangeEvent<HTMLInputElement>, checked: boolean): void;
}

class FormSwitch extends React.Component<Props> {
  render(): React.ReactNode {
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
    );
  }
}

export default FormSwitch;
