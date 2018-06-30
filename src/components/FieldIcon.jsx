import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import CreateIcon from '@material-ui/icons/Create';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TitleIcon from '@material-ui/icons/Title';
import PersonIcon from '@material-ui/icons/Person';

const ICONS = {
  DATE: NotificationsActiveIcon,
  NOTE: EventNoteIcon,
  PRIORITY: PriorityHighIcon,
  TITLE: TitleIcon,
  STATUS: BatteryAlertIcon,
  PERSON: PersonIcon,
  LOCATION: PersonPinCircleIcon,
};

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
  },
});

class FieldIcon extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    fieldId: PropTypes.string,
  };

  render() {
    console.log(['FieldIcon:render'], this.props);
    const { classes, fieldId } = this.props;
    const Icon = ICONS[fieldId] || CreateIcon;

    return (
      <Icon className={classes.icon} />
    )
  }
}

export default withStyles(styles)(FieldIcon);
