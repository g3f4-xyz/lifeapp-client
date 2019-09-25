import { FormControlLabel, Switch as MaterialSwitch } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';
import FieldContainer from '../../containers/field-container/FieldContainer';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean | null;
  label?: string;
  required?: boolean;

  onChange(value: boolean): void;
}

const Switch: FC<SwitchProps> = props => {
  const { checked, disabled, label } = props;

  const handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    props.onChange(event.target.checked);
  };

  return (
    <FieldContainer>
      <FormControlLabel
        control={
          <MaterialSwitch
            checked={checked}
            disabled={disabled as (boolean | undefined)}
            value={checked}
            onChange={handleChange}
          />
        }
        label={label}
      />
    </FieldContainer>
  );
};

export default Switch;
