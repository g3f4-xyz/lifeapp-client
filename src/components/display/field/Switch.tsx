import { FormControlLabel, Switch as MaterialSwitch } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import FieldContainer from '../../containers/FieldContainer';

interface Props {
  checked?: boolean;
  disabled?: boolean | null;
  label?: string;
  required?: boolean;

  onChange(value: boolean): void;
}

export default class Switch extends React.Component<Props> {
  render(): React.ReactNode {
    const { checked, disabled, label } = this.props;

    return (
      <FieldContainer>
        <FormControlLabel
          control={<MaterialSwitch checked={checked} disabled={disabled as (boolean | undefined)} value={checked} onChange={this.handleChange} />}
          label={label}
        />
      </FieldContainer>
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    this.props.onChange(event.target.checked);
  };
}
