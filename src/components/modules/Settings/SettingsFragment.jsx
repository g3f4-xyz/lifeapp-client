import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { createFragmentContainer, graphql } from 'react-relay';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import deleteSubscriptionsMutation from '../../../mutations/deleteSubscriptions';
import saveSettingsMutation from '../../../mutations/saveSettings';

const styles = theme =>({
  addButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 72,
    width: 72,
  },
  addButtonIcon: {
    color: '#8BC34A',
    fontSize: 72,
  },
  button: {
  },
  container: {
  },
  list: {
  },
  display1: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit,
  },
  section: {
    margin: theme.spacing.unit * 2,
  },
});

class SettingsFragment extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
  };

  state = this.props.data;

  onSave = async () => {
    const { onSaveDone } = this.props;
    const settings = this.state;
    console.log(['Settings:onSave'], this.state);

    try {
      await saveSettingsMutation({
        settings: {
          authentication: {
            provider: settings.authentication.provider,
          },
          notifications: {
            show: settings.notifications.show,
            daily: {
              events: settings.notifications.daily.events,
              meetings: settings.notifications.daily.meetings,
              routines: settings.notifications.daily.routines,
              todos: settings.notifications.daily.todos,
            },
            single: {
              events: settings.notifications.single.events,
              meetings: settings.notifications.single.meetings,
              routines: settings.notifications.single.routines,
              todos: settings.notifications.single.todos,
            },
          },
        },
        hashId: settings.id,
      });
      onSaveDone();
    }

    catch (error) {
      console.error(['Settings:onSave:error'], error);
    }
  };

  updateAuthentication = (key, $set) => {
    console.log(['updateAuthentication'], key, $set);
    this.setState(update(this.state, {
      authentication: {
        [key]: { $set },
      }
    }));
  };

  updateNotifications = (type, key, $set) => {
    console.log(['updateNotifications'], type, key, $set);
    this.setState(update(this.state, {
      notifications: {
        [type]: {
          [key]: { $set },
        },
      }
    }));
  };

  updateNotificationsShow = ($set) => {
    console.log(['updateNotificationsShow'], $set);
    this.setState(update(this.state, {
      notifications: {
        show: { $set },
      }
    }));
  };

  updateNotificationsVibrate = ($set) => {
    console.log(['updateNotificationsVibrate'], $set);
    this.setState(update(this.state, {
      notifications: {
        vibrate: { $set },
      }
    }));
  };

  onDeleteSubscription = async () => {
    console.log(['onDeleteSubscription']);
    await deleteSubscriptionsMutation({
      ownerId: this.state.ownerId,
    })
  };

  render() {
    console.log(['SettingsFragment:render'], this.props, this.state);
    const { classes } = this.props;
    const { authentication, notifications } = this.state;
    const { provider } = authentication;
    const { daily, show, single, vibrate } = notifications;

    return (
      <div className={classes.container}>
        <IconButton
          className={classes.addButton}
          color="primary"
          onClick={this.onSave}
        >
          <CheckCircleIcon className={classes.addButtonIcon} />
        </IconButton>
        <Paper className={classes.section}>
          <Typography className={classes.display1} variant="display1" gutterBottom>
            Notifications
          </Typography>
          <div className={classes.list}>
            <List subheader={<ListSubheader>General</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Show" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotificationsShow(checked)}
                    checked={show}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Vibrate" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotificationsVibrate(checked)}
                    checked={vibrate}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Subscription" />
                <ListItemSecondaryAction>
                  <Button
                    color="secondary"
                    className={classes.button}
                    onClick={this.onDeleteSubscription}
                  >
                    Delete subscription
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
          <div className={classes.root}>
            <List subheader={<ListSubheader>Daily</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotifications('daily', 'events', checked)}
                    checked={daily.events}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Meetings" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotifications('daily', 'meetings', checked)}
                    checked={daily.meetings}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Routines" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotifications('daily', 'routines', checked)}
                    checked={daily.routines}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Todos" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotifications('daily', 'todos', checked)}
                    checked={daily.todos}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
          <div className={classes.list}>
            <List subheader={<ListSubheader>Single</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotifications('single', 'events', checked)}
                    checked={single.events}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Meetings" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotifications('single', 'meetings', checked)}
                    checked={single.meetings}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Routines" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotifications('single', 'routines', checked)}
                    checked={single.routines}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Todos" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={(_, checked) => this.updateNotifications('single', 'todos', checked)}
                    checked={single.todos}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
        </Paper>
        <Paper className={classes.section}>
          <Typography className={classes.display1} variant="display1" gutterBottom>
            Authentication
          </Typography>
          <div className={classes.list}>
            <List subheader={<ListSubheader>General</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Provider" />
                <ListItemText primary={provider} />
                <ListItemSecondaryAction>
                  <Button color="secondary" className={classes.button}>
                    Delete authentication
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>

        </Paper>
      </div>
    );
  }
}

export default createFragmentContainer(
  withStyles(styles)(SettingsFragment),
  graphql`
    fragment SettingsFragment on SettingsType {
      id
      ownerId
      authentication {
        id
        provider
      }
      notifications {
        id
        daily {
          id
          events
          meetings
          todos
          routines
        }
        show
        single {
          id
          events
          meetings
          todos
          routines
        }
      }
    }
  `,
);

