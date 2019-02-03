import { TextField } from '@material-ui/core';
import { BaseTextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

interface Props extends BaseTextFieldProps {
  helperText: string;
}

class Input extends React.Component<Props> {
  render() {
    const { helperText, ...props } = this.props;

    return (
      // @ts-ignore
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        helperText={helperText}
        fullWidth
        {...props}
      />
    )
  }
}

export default Input;
