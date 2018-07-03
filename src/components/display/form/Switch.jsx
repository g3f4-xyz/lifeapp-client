import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import SwitchComponent from '@material-ui/core/Switch';

const styles = theme => ({
});

class Switch extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    id: PropTypes.string,
    fieldId: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  };

  render() {
    const { classes, id, fieldId, label, checked, onChange } = this.props;

    return (
      <FormControlLabel
        id={id}
        control={
          <SwitchComponent
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

export default withStyles(styles)(Switch);
