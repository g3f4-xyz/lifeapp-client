import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GroupIcon from '@material-ui/icons/Group';
import UpdateIcon from '@material-ui/icons/Update';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import { TASK_TYPES } from '../../constans';

const ICONS = {
  [TASK_TYPES.EVENT]: DateRangeIcon,
  [TASK_TYPES.MEETING]: GroupIcon,
  [TASK_TYPES.ROUTINE]: UpdateIcon,
  [TASK_TYPES.TODO]: LocalOfferIcon,
};

const styles = theme => ({
  icon: {
    fontSize: theme.spacing.unit * 3,
  },
});

class TaskTypeIcon extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    const { classes, className, type } = this.props;
    const Icon = ICONS[type] || SettingsIcon;

    return (
      <Icon className={classNames(classes.icon, className)} />
    );
  }
}

export default withStyles(styles)(TaskTypeIcon);
