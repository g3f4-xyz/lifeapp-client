// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { green, red } from '@material-ui/core/colors';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import { CheckCircle, Computer, Delete, DevicesOther, HelpOutline, HighlightOff, Smartphone } from '@material-ui/icons';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { DEVICES, STATUSES } from '../../../constans';

const DEVICES_ICONS = {
  [DEVICES.DESKTOP]: Computer,
  [DEVICES.MOBILE]: Smartphone,
  [DEVICES.OTHER]: DevicesOther,
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

interface Props {
  classes?: any;
  data: any;
  onDelete: any;
  onTest: any;
}

interface State {
  statusCode: string;
}

class SubscriptionFragment extends React.Component<Props, State> {
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
          <UserDeviceTypeIcon/>
        </ListItemIcon>
        <ListItemText primary={userAgent}/>
        <ListItemSecondaryAction>
          <IconButton onClick={this.handleDelete} aria-label="Delete">
            <Delete/>
          </IconButton>
          <IconButton onClick={this.handleTest} aria-label="Test">
            {!statusCode && (
              <HelpOutline/>
            )}
            {statusCode === STATUSES.OK && (
              <CheckCircle className={classes.green}/>
            )}
            {statusCode === STATUSES.NOT_REGISTERED && (
              <HighlightOff className={classes.red}/>
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

