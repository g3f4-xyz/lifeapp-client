import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Fields from '../../containers/Fields';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
    minHeight: 50,
  },
  addButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 72,
    width: 72,
  },
  addButtonIcon: {
    color: '#8BC34A',
    fontSize: 72,
  },
};

class TaskEdit extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    fields: PropTypes.array,
    taskType: PropTypes.string,
    onSave: PropTypes.func,
  };

  render() {
    console.log(['TaskEdit:render'], this.props);
    const { classes, fields, taskType, onSave } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          className={classes.addButton}
          color="primary"
          onClick={onSave}
        >
          <CheckCircleIcon className={classes.addButtonIcon} />
        </IconButton>
        <h1>{taskType}</h1>
        <Fields fields={fields} />
      </div>
    );
  }
}

export default withStyles(styles)(TaskEdit);
