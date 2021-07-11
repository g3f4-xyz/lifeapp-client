import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Typography,
} from '@material-ui/core';
import { ExpandMore, Slideshow, Vibration } from '@material-ui/icons';
import React, { ChangeEvent, FC } from 'react';
import useSaveNotificationsGeneralSettingMutation from './useSaveNotificationsGeneralSettingMutation';
import { useNotificationsGeneralFragment$key } from './__generated__/useNotificationsGeneralFragment.graphql';
import useNotificationsGeneralFragment from './useNotificationsGeneralFragment';
import useNotificationsGeneralFragmentStyles from './useNotificationsGeneralFragmentStyles';

interface NotificationsGeneralProps {
  data: useNotificationsGeneralFragment$key;
}

const NotificationsGeneral: FC<NotificationsGeneralProps> = (props) => {
  const { show, vibrate } = useNotificationsGeneralFragment(props.data);
  const classes = useNotificationsGeneralFragmentStyles();
  const saveNotificationsGeneralSettingMutation = useSaveNotificationsGeneralSettingMutation();
  const handleShowChange = async (
    _: ChangeEvent<HTMLInputElement>,
    changedShow: boolean,
  ): Promise<void> => {
    await saveNotificationsGeneralSettingMutation({
      general: {
        vibrate,
        show: changedShow,
      },
    });
  };
  const handleVibrateChange = async (
    _: ChangeEvent<HTMLInputElement>,
    changedVibrate: boolean,
  ): Promise<void> => {
    await saveNotificationsGeneralSettingMutation({
      general: {
        show,
        vibrate: changedVibrate,
      },
    });
  };

  return (
    <Accordion className={classes.wrapper}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>General</Typography>
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default NotificationsGeneral;
