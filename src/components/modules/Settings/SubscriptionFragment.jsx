import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createFragmentContainer, graphql } from 'react-relay';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import ComputerIcon from '@material-ui/icons/Computer';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import { DEVICES, STATUSES } from '../../../constans';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const DEVICES_ICONS = {
  [DEVICES.DESKTOP]: ComputerIcon,
  [DEVICES.MOBILE]: SmartphoneIcon,
  [DEVICES.OTHER]: DevicesOtherIcon,
};

const styles = {
  green: {
    color: green['500'],
  },
  red: {
    color: red['500'],
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  listItemIcon: {
    marginRight: 0,
  },
};

class SubscriptionFragment extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
    onDelete: PropTypes.func,
    onTest: PropTypes.func,
  };

  state = {
    statusCode: '',
  };

  handleDelete = () => {
    this.props.onDelete(this.props.data.id);
  };

  handleTest = async () => {
    const statusCode = await this.props.onTest(this.props.data.id);

    this.setState({ statusCode });
  };

  render() {
    const { classes, data: { id, userDeviceType, userAgent } } = this.props;
    const { statusCode } = this.state;
    const UserDeviceTypeIcon = DEVICES_ICONS[userDeviceType] || DEVICES_ICONS[DEVICES.OTHER];

    return (
      <ListItem key={id} className={classes.listItem}>
        <ListItemIcon className={classes.listItemIcon}>
          <UserDeviceTypeIcon />
        </ListItemIcon>
        <ListItemText primary={userAgent} />
        <ListItemSecondaryAction>
          <IconButton onClick={this.handleDelete} aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={this.handleTest} aria-label="Test">
          {!statusCode && (
            <HelpOutlineIcon />
          )}
          {statusCode === STATUSES.OK && (
            <CheckCircleIcon className={classes.green} />
          )}
          {statusCode === STATUSES.NOT_REGISTERED && (
            <HighlightOffIcon className={classes.red} />
          )}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default createFragmentContainer(
  withStyles(styles)(SubscriptionFragment),
  graphql`
    fragment SubscriptionFragment on SubscriptionType {
      id
      userAgent
      userDeviceType
    }
  `,
);

