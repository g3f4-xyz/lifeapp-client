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
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';
import { ExpandMore, Slideshow, Vibration } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import saveNotificationsGeneralSettingMutation from '../../../mutations/saveNotificationsGeneralSettingMutation';

const styles = (theme: Theme) => ({
  expansionPanel: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  list: {
    width: '100%',
  },
});

interface Props {
  classes?: any;
  data: any;
}

class NotificationsGeneral extends React.Component<Props> {
  handleShowChange = async (_: any, show: any): Promise<any> => {
    await saveNotificationsGeneralSettingMutation({
      general: {
        ...this.props.data,
        show,
      },
    });
  };

  handleVibrateChange = async (_: any, vibrate: any): Promise<any> => {
    await saveNotificationsGeneralSettingMutation({
      general: {
        ...this.props.data,
        vibrate,
      },
    });
  };

  render(): React.ReactNode {
    const { classes, data: { show, vibrate } } = this.props;

    return (
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
          <Typography>General</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon>
                <Slideshow/>
              </ListItemIcon>
              <ListItemText primary="Show"/>
              <ListItemSecondaryAction>
                <Switch onChange={this.handleShowChange} checked={show}/>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Vibration/>
              </ListItemIcon>
              <ListItemText primary="Vibrate"/>
              <ListItemSecondaryAction>
                <Switch onChange={this.handleVibrateChange} checked={vibrate}/>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default createFragmentContainer(
  // @ts-ignore
  withStyles(styles)(NotificationsGeneral),
  graphql`
    fragment NotificationsGeneralFragment on NotificationsGeneralSettingType {
      show
      vibrate
    }
  `,
);


