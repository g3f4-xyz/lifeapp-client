import {
  Checkbox,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Theme,
  withStyles,
} from '@material-ui/core';
import React, { ChangeEvent, Fragment, SyntheticEvent } from 'react';
import ReactInputMask from 'react-input-mask';
import { CUSTOM_OPTION_VALUE } from '../../../constans';
import { FormSelectProps } from './FormSelect';

const styles = (theme: Theme) => ({
  textField: {
    width: theme.spacing.unit * 5,
    textAlign: 'right',
  },
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export interface MultipleSelectProps extends FormSelectProps {
  classes?: any;
  customValueOptionMask: any;
  customValueOptionValue: any;
  ids: any;
  optionsSet: any;
}

class MultipleSelect extends React.Component<MultipleSelectProps> {
  renderValue = (selected: any) => {
    const { customValueOptionValue, options } = this.props;
    const filteredOptions = options.filter(({ value }: any) => selected.includes(value));

    return filteredOptions.map(({ text, value }: any) => {
      if (value !== CUSTOM_OPTION_VALUE) {
        return text;
      }

      return `${text} (${customValueOptionValue})`;
    }).join(', ');
  };

  render(): React.ReactNode {
    const {
      classes,
      fieldId,
      ids,
      label,
      options,
      customValueOptionMask,
      customValueOptionValue = '',
      onChange,
      ...selectProps
    } = this.props;

    return (
      <Fragment>
        <InputLabel htmlFor={fieldId}>{label}</InputLabel>
        <Select
          multiple
          value={ids || []}
          input={<Input id={fieldId} />}
          renderValue={this.renderValue}
          MenuProps={MenuProps}
          onChange={onChange}
          {...selectProps}
        >
        {options.map(({ text, value }: any) => (
          <MenuItem key={value} value={value}>
            <ListItemText primary={text} />
          {value !== CUSTOM_OPTION_VALUE ? (
            <Checkbox checked={ids && ids.indexOf(value) > -1} />
            ) : (
            <Fragment>
              <ReactInputMask
                mask={customValueOptionMask}
                value={customValueOptionValue}
                onChange={(e: any): void => onChange && onChange(e, { isCustomOptionValueUpdate: true })}
              >
              {(inputProps: any) => (
                <TextField className={classes.textField} {...inputProps} />
              )}
              </ReactInputMask>
              <Checkbox checked={ids && ids.indexOf(value) > -1} />
            </Fragment>
          )}
          </MenuItem>
        ))}
        </Select>
      </Fragment>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(MultipleSelect);
