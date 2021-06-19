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
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent, FC } from 'react';
import { createFragmentContainer } from 'react-relay';
import saveNotificationsGeneralSettingMutation from '../../../../../mutations/saveNotificationsGeneralSettingMutation';
// eslint-disable-next-line @typescript-eslint/camelcase
import { NotificationsGeneralFragment_data } from './__generated__/NotificationsGeneralFragment_data.graphql';
import useNotificationsGeneralFragmentStyles from './useNotificationsGeneralFragmentStyles';

interface NotificationsGeneralProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: NotificationsGeneralFragment_data;
}

const NotificationsGeneral: FC<NotificationsGeneralProps> = props => {
  const {
    data: { show, vibrate },
  } = props;
  const classes = useNotificationsGeneralFragmentStyles();

  const handleShowChange = async (
    _: ChangeEvent<HTMLInputElement>,
    show: boolean,
  ): Promise<void> => {
    await saveNotificationsGeneralSettingMutation({
      general: {
        ...props.data,
        show,
      },
    });
  };

  const handleVibrateChange = async (
    _: ChangeEvent<HTMLInputElement>,
    vibrate: boolean,
  ): Promise<void> => {
    await saveNotificationsGeneralSettingMutation({
      general: {
        ...props.data,
        vibrate,
      },
    });
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

export default createFragmentContainer(NotificationsGeneral, {
  data: graphql`
    fragment NotificationsGeneralFragment_data on GeneralNotificationsSettings {
      show
      vibrate
    }
  `,
});
