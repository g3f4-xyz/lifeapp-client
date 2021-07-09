import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Typography,
} from '@material-ui/core';
import { ExpandMore, Slideshow, Vibration } from '@material-ui/icons';
import React, { ChangeEvent, FC, useContext } from 'react';
import saveNotificationsGeneralSettingMutation from '../../../../../mutations/saveNotificationsGeneralSettingMutation';
import useNotificationsGeneralFragmentStyles from './useNotificationsGeneralFragmentStyles';
import RelayEnvironmentContext from '../../../../../contexts/RelayEnvironmentContext';
import useNotificationsGeneralFragment from './useNotificationsGeneralFragment';
import { useNotificationsGeneralFragment$ref } from './__generated__/useNotificationsGeneralFragment.graphql';

interface NotificationsGeneralProps {
  data: useNotificationsGeneralFragment$ref;
}

const NotificationsGeneral: FC<NotificationsGeneralProps> = props => {
  const { show, vibrate } = useNotificationsGeneralFragment(props.data);
  const classes = useNotificationsGeneralFragmentStyles();
  const environment = useContext(RelayEnvironmentContext);

  const handleShowChange = async (
    _: ChangeEvent<HTMLInputElement>,
    changedShow: boolean,
  ): Promise<void> => {
    await saveNotificationsGeneralSettingMutation(
      {
        general: {
          vibrate,
          show: changedShow,
        },
      },
      environment,
    );
  };

  const handleVibrateChange = async (
    _: ChangeEvent<HTMLInputElement>,
    changedVibrate: boolean,
  ): Promise<void> => {
    await saveNotificationsGeneralSettingMutation(
      {
        general: {
          show,
          vibrate: changedVibrate,
        },
      },
      environment,
    );
  };

  return (
    <ExpansionPanel className={classes.wrapper}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography>General</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List className={classes.list}>
          <ListItem>
            <ListItemIcon>
              <Slideshow />
            </ListItemIcon>
            <ListItemText primary="Show" />
            <ListItemSecondaryAction>
              <Switch onChange={handleShowChange} checked={show} />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Vibration />
            </ListItemIcon>
            <ListItemText primary="Vibrate" />
            <ListItemSecondaryAction>
              <Switch onChange={handleVibrateChange} checked={vibrate} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default NotificationsGeneral;
