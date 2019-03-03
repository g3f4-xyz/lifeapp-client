import { FormControlLabel, Switch as MaterialSwitch } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import FieldContainer from '../../containers/FieldContainer';

interface Props {
  checked?: boolean;
  label?: string;
  required?: boolean;

  onChange(value: boolean): void;
}

export default class Switch extends React.Component<Props> {
  render(): React.ReactNode {
    const { checked, label } = this.props;

    return (
      <FieldContainer>
        <FormControlLabel
          control={
            <MaterialSwitch
              checked={checked}
              value={checked}
              onChange={this.handleChange}
            />
          }
          label={label}
        />
      </FieldContainer>
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    this.props.onChange(event.target.checked);
  };
}
