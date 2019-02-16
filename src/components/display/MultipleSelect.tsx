import {
  Checkbox,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  StyledComponentProps,
  Theme,
  withStyles,
} from '@material-ui/core';
import { SelectProps } from '@material-ui/core/Select';
import React, { ChangeEvent, Fragment } from 'react';

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
  onChange(event: ChangeEvent<HTMLSelectElement>): void;
}

class MultipleSelect extends React.Component<MultipleSelectProps> {
  renderValue = (values: SelectProps['value']): React.ReactNode => {
    if (values && Array.isArray(values)) {
      const { options } = this.props;
      const filteredOptions = options.filter(({ value }) => values.includes(value));

      return filteredOptions.map(({ text }): string => text).join(', ');
    }
  };

  render(): React.ReactNode {
    const {
      classes,
      fieldId,
      ids,
      label,
      options,
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
          onChange={onChange}
        >
        {options.map(({ text, value }) => (
          <MenuItem key={value} value={value}>
            <ListItemText primary={text} />
            <Checkbox checked={ids.includes(value)} />
          </MenuItem>
        ))}
        </Select>
      </Fragment>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(MultipleSelect);
