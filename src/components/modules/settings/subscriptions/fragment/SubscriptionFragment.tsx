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
import React, { FC, useContext, useState } from 'react';
import { DEVICES, STATUSES } from '../../../../../constans';
import testSubscriptionMutation from '../../../../../mutations/testSubscriptionMutation';
import useSubscriptionFragmentStyles from '../pagination/useSubscriptionFragmentStyles';
import RelayEnvironmentContext from '../../../../../contexts/RelayEnvironmentContext';
import useSubscriptionFragment from './useSubscriptionFragment';
import { useSubscriptionFragment$ref } from './__generated__/useSubscriptionFragment.graphql';

const DEVICES_ICONS = {
  [DEVICES.DESKTOP]: Computer,
  [DEVICES.MOBILE]: Smartphone,
  [DEVICES.OTHER]: DevicesOther,
};

interface SubscriptionFragmentProps {
  data: useSubscriptionFragment$ref;

  onDelete(subscriptionId: string): void;
}

const SubscriptionFragment: FC<SubscriptionFragmentProps> = props => {
  const { id, userDeviceType, userAgent } = useSubscriptionFragment(props.data);
  const classes = useSubscriptionFragmentStyles();
  const [statusCode, setStatusCode] = useState('');
  const environment = useContext(RelayEnvironmentContext);

  const handleDelete = () => {
    props.onDelete(props.data.id);
  };

  const handleTest = async () => {
    const { testSubscription } = await testSubscriptionMutation(
      {
        subscriptionId: props.data.id,
      },
      environment,
    );

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
};

export default SubscriptionFragment;
