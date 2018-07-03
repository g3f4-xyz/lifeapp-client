import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { CUSTOM_OPTION_VALUE } from '../../../constans'

const styles = theme => ({
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

class MultipleSelect extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    optionsSet: PropTypes.array,
    parentValue: PropTypes.string,
    ...Select.PropTypes,
  };

  renderValue = (selected) => {
    const { customValueOptionValue, options } = this.props;
    const filteredOptions = options.filter(({ value }) => selected.includes(value));

    return filteredOptions.map(({ text, value }) => {
      if (value !== CUSTOM_OPTION_VALUE) {
        return text;
      }

      return `${text} (${customValueOptionValue})`;
    }).join(', ');
  };

  render() {
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
        {options.map(({ text, value }) => (
          <MenuItem key={value} value={value}>
            <ListItemText primary={text} />
          {value !== CUSTOM_OPTION_VALUE ? (
            <Checkbox checked={ids && ids.indexOf(value) > -1} />
            ) : (
            <Fragment>
              <InputMask
                mask={customValueOptionMask}
                value={customValueOptionValue}
                onChange={e => onChange(e, { isCustomOptionValueUpdate: true })}
              >
              {(inputProps) => (
                <TextField className={classes.textField} {...inputProps} />
              )}
              </InputMask>
              <Checkbox checked={ids && ids.indexOf(value) > -1} />
            </Fragment>
          )}
          </MenuItem>
        ))}
        </Select>
      </Fragment>
    )
  }
}

export default withStyles(styles)(MultipleSelect);
