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
import DeleteForever from '@material-ui/icons/DeleteForever';
import Vibration from '@material-ui/icons/Vibration';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Slideshow from '@material-ui/icons/Slideshow';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TaskTypeIcon from '../../../components/display/TaskTypeIcon';
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
  expansionPanel: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  list: {
    width: '100%',
  },
  display1: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit,
  },
  section: {
    margin: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
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
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>General</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List className={classes.list}>
                <ListItem>
                  <ListItemIcon>
                    <Slideshow />
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
                    <Vibration />
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
                    <Subscriptions />
                  </ListItemIcon>
                  <ListItemText primary="Subscription" />
                  <ListItemSecondaryAction>
                    <Button
                      color="secondary"
                      className={classes.button}
                      onClick={this.onDeleteSubscription}
                    >
                      <DeleteForever />
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Daily</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List className={classes.list}>
                <ListItem>
                  <ListItemIcon>
                    <TaskTypeIcon type="EVENT" />
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
                    <TaskTypeIcon type="MEETING" />
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
                    <TaskTypeIcon type="ROUTINE" />
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
                    <TaskTypeIcon type="TODO" />
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
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Single</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List className={classes.list}>
                <ListItem>
                  <ListItemIcon>
                    <TaskTypeIcon type="EVENT" />
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
                    <TaskTypeIcon type="MEETING" />
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
                    <TaskTypeIcon type="ROUTINE" />
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
                    <TaskTypeIcon type="TODO" />
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
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
        <Paper className={classes.section}>
          <Typography className={classes.display1} variant="display1" gutterBottom>
            Authentication
          </Typography>
          <div className={classes.list}>
            <List subheader={<ListSubheader>General</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <Slideshow />
                </ListItemIcon>
                <ListItemText primary="Provider" />
                <ListItemText primary={provider} />
                <ListItemSecondaryAction>
                  <Button color="secondary" className={classes.button}>
                    <DeleteForever />
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

