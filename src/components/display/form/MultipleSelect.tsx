import {
  Checkbox,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select, StyledComponentProps,
  TextField,
  Theme,
  withStyles,
} from '@material-ui/core';
import { SelectProps } from '@material-ui/core/Select';
import React, { ChangeEvent, Fragment } from 'react';
import ReactInputMask, { InputState } from 'react-input-mask';
import { CUSTOM_OPTION_VALUE } from '../../../constans';

const styles = (theme: Theme) => ({
  textField: {
    width: theme.spacing.unit * 5,
    textAlign: 'right',
  },
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export interface MultipleSelectProps extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  fieldId: string;
  ids: string[];
  label: string;
  options: Array<{ value: string, text: string }>;
  customValueOptionMask: string;
  customValueOptionValue: string;
  onChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    options: { isCustomOptionValueUpdate: boolean },
  ): void;
}

class MultipleSelect extends React.Component<MultipleSelectProps> {
  renderValue = (values: SelectProps['value']): React.ReactNode => {
    if (values && Array.isArray(values)) {
      const { customValueOptionValue, options } = this.props;
      const filteredOptions = options.filter(({ value }) => values.includes(value));

      return filteredOptions.map(({ text, value }): string => {
        if (value !== CUSTOM_OPTION_VALUE) {
          return text;
        }

        return `${text} (${customValueOptionValue})`;
      }).join(', ');
    }
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
    } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <Fragment>
        <InputLabel htmlFor={fieldId}>{label}</InputLabel>
        <Select
          multiple
          value={ids || []}
          input={<Input id={fieldId} />}
          renderValue={this.renderValue}
          MenuProps={menuProps}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e, { isCustomOptionValueUpdate: false })}
        >
        {options.map(({ text, value }) => (
          <MenuItem key={value} value={value}>
            <ListItemText primary={text} />
          {value !== CUSTOM_OPTION_VALUE ? (
            <Checkbox checked={ids && ids.indexOf(value) > -1} />
            ) : (
            <Fragment>
              <ReactInputMask
                mask={customValueOptionMask}
                value={customValueOptionValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, { isCustomOptionValueUpdate: true })}
              >
              {(inputState: InputState) => (
                <TextField className={classes.textField} {...inputState} />
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
