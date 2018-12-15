import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GroupIcon from '@material-ui/icons/Group';
import UpdateIcon from '@material-ui/icons/Update';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const ICONS = {
  EVENT: DateRangeIcon,
  MEETING: GroupIcon,
  ROUTINE: UpdateIcon,
  TODO: LocalOfferIcon,
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
    console.log(['TaskTypeIcon:render'], this.props);
    const { classes, className, type } = this.props;
    const Icon = ICONS[type] || SettingsIcon;

    return (
      <Icon className={classnames(classes.icon, className)} />
    );
  }
}

export default withStyles(styles)(TaskTypeIcon);
