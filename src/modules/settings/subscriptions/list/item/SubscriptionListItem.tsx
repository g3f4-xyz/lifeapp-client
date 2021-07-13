import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import {
  CheckCircle,
  Computer,
  Delete,
  DevicesOther,
  HelpOutline,
  HighlightOff,
  Smartphone,
} from '@material-ui/icons';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import React, { useState } from 'react';
import { DEVICES, STATUSES } from '../../../../../constans';
import { useSubscriptionListItemFragment$key } from './__generated__/useSubscriptionListItemFragment.graphql';
import useSubscriptionListItemFragment from './useSubscriptionListItemFragment';
import useSubscriptionListItemStyles from './useSubscriptionListItemStyles';
import useTestSubscriptionMutation from './useTestSubscriptionMutation';

const DEVICES_ICONS = {
  [DEVICES.DESKTOP]: Computer,
  [DEVICES.MOBILE]: Smartphone,
  [DEVICES.OTHER]: DevicesOther,
};

function SubscriptionListItem(props: {
  data: useSubscriptionListItemFragment$key;

  onDelete(subscriptionId: string): void;
}) {
  const { id, userDeviceType, userAgent } = useSubscriptionListItemFragment(props.data);
  const classes = useSubscriptionListItemStyles();
  const [statusCode, setStatusCode] = useState('');
  const testSubscriptionMutation = useTestSubscriptionMutation();
  const handleDelete = () => {
    props.onDelete(id);
  };
  const handleTest = async () => {
    const { testSubscription } = await testSubscriptionMutation({
      subscriptionId: id,
    });

    if (testSubscription) {
      setStatusCode(testSubscription.statusCode);
    }
  };
  const UserDeviceTypeIcon = userDeviceType
    ? DEVICES_ICONS[userDeviceType]
    : DEVICES_ICONS[DEVICES.OTHER];

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
}

export default SubscriptionListItem;
