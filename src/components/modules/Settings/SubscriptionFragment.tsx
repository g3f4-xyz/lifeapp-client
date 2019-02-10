import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText, StyledComponentProps,
  withStyles,
} from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { CheckCircle, Computer, Delete, DevicesOther, HelpOutline, HighlightOff, Smartphone } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { DEVICES, STATUSES } from '../../../constans';
import testSubscriptionMutation from '../../../mutations/testSubscriptionMutation';
import { SubscriptionFragment } from './__generated__/SubscriptionFragment.graphql';

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

interface Props extends StyledComponentProps<keyof typeof styles> {
  data: SubscriptionFragment;
  onDelete(subscriptionId: string): void;
}

interface State {
  statusCode: string;
}

class Subscription extends React.Component<Props, State> {
  state = {
    statusCode: '',
  };

  handleDelete = () => {
    this.props.onDelete(this.props.data.id);
  };

  handleTest = async () => {
    const { testSubscription } = await testSubscriptionMutation({
      subscriptionId: this.props.data.id,
    });

    if (testSubscription) {
      this.setState({ statusCode: testSubscription.statusCode });
    }
  };

  render(): React.ReactNode {
    const { classes, data: { id, userDeviceType, userAgent } } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

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
            <Delete />
          </IconButton>
          <IconButton onClick={this.handleTest} aria-label="Test">
            {!statusCode && (
              <HelpOutline />
            )}
            {statusCode === STATUSES.OK && (
              <CheckCircle className={classes.green} />
            )}
            {statusCode === STATUSES.NOT_REGISTERED && (
              <HighlightOff className={classes.red} />
            )}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default createFragmentContainer<Props>(
  withStyles(styles)(Subscription),
  graphql`
    fragment SubscriptionFragment on SubscriptionType {
      id
      userAgent
      userDeviceType
    }
  `,
);
