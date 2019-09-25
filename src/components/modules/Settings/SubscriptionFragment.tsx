import { IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { CheckCircle, Computer, Delete, DevicesOther, HelpOutline, HighlightOff, Smartphone } from '@material-ui/icons';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import graphql from 'babel-plugin-relay/macro';
import React, { FC, useState } from 'react';
import { createFragmentContainer } from 'react-relay';
import { DEVICES, STATUSES } from '../../../constans';
import testSubscriptionMutation from '../../../mutations/testSubscriptionMutation';
// eslint-disable-next-line @typescript-eslint/camelcase
import { SubscriptionFragment_data } from './__generated__/SubscriptionFragment_data.graphql';
import useSubscriptionFragmentStyles from './useSubscriptionFragmentStyles';

const DEVICES_ICONS = {
  [DEVICES.DESKTOP]: Computer,
  [DEVICES.MOBILE]: Smartphone,
  [DEVICES.OTHER]: DevicesOther,
};

interface SubscriptionFragmentProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: SubscriptionFragment_data;

  onDelete(subscriptionId: string): void;
}

const SubscriptionFragment: FC<SubscriptionFragmentProps> = props => {
  const {
    data: { id, userDeviceType, userAgent },
  } = props;
  const classes = useSubscriptionFragmentStyles();
  const [statusCode, setStatusCode] = useState('');

  const handleDelete = () => {
    props.onDelete(props.data.id);
  };

  const handleTest = async () => {
    const { testSubscription } = await testSubscriptionMutation({
      subscriptionId: props.data.id,
    });

    if (testSubscription) {
      setStatusCode(testSubscription.statusCode);
    }
  };

  const UserDeviceTypeIcon = DEVICES_ICONS[userDeviceType] || DEVICES_ICONS[DEVICES.OTHER];

  return (
    <ListItem key={id} className={classes.listItem}>
      <ListItemIcon className={classes.listItemIcon}>
        <UserDeviceTypeIcon />
      </ListItemIcon>
      <ListItemText primary={userAgent} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleDelete} aria-label="Delete">
          <Delete />
        </IconButton>
        <IconButton onClick={handleTest} aria-label="Test">
          {!statusCode && <HelpOutline />}
          {statusCode === STATUSES.OK && <CheckCircle className={classes.green} />}
          {statusCode === STATUSES.NOT_REGISTERED && <HighlightOff className={classes.red} />}
          {statusCode === STATUSES.REQUEST_TIMEOUT && <CloudOffIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default createFragmentContainer<SubscriptionFragmentProps>(SubscriptionFragment, {
  data: graphql`
    fragment SubscriptionFragment_data on SubscriptionType {
      id
      userAgent
      userDeviceType
    }
  `,
});
