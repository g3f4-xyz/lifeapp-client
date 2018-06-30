import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
});

class Input extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    ...TextField.propTypes,
  };

  render() {
    const { classes, helperText, ...props } = this.props;

    return (
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

export default withStyles(styles)(Input);
