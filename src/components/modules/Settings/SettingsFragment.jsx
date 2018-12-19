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
import Slideshow from '@material-ui/icons/Slideshow';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TaskTypeIcon from '../../../components/display/TaskTypeIcon';
import cleanApplicationMutation from '../../../mutations/cleanApplication';
import deleteSubscriptionMutation from '../../../mutations/deleteSubscription';
import deleteSubscriptionsMutation from '../../../mutations/deleteSubscriptions';
import saveSettingsMutation from '../../../mutations/saveSettings';
import testSubscriptionMutation from '../../../mutations/testSubscription';
import SubscriptionsPagination from './SubscriptionsPagination';

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
  accountContent: {
    display: 'flex',
    justifyContent: 'center',
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

  state = {
    cleanApplicationDialogOpen: false,
    ...this.props.data,
  };

  onSave = async () => {
    const { onSaveDone } = this.props;
    const { authentication, notifications, id } = this.state;
    console.log(['Settings:onSave'], { authentication, notifications });

    try {
      await saveSettingsMutation({
        settings: {
          notifications: {
            general: {
              show: notifications.general.show,
              vibrate: notifications.general.vibrate,
            },
            types: {
              events: notifications.types.events,
              meetings: notifications.types.meetings,
              routines: notifications.types.routines,
              todos: notifications.types.todos,
            },
          },
        },
        hashId: id,
      });
      onSaveDone();
    }

    catch (error) {
      console.error(['Settings:onSave:error'], error);
    }
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

  handleCleanApplicationDialogClose = () => {
    this.setState({ cleanApplicationDialogOpen: false });
  };

  handleCleanApplicationDialogOpen = () => {
    this.setState({ cleanApplicationDialogOpen: true });
  };


  handleCleanApplication = async () => {
    const { cleanApplication: { navigationUrl } } = await cleanApplicationMutation({
      ownerId: this.props.data.ownerId,
    });

    window.location.href = navigationUrl;
  };

  onDeleteSubscription = async subscriptionId => {
    console.log(['onDeleteSubscription'], subscriptionId);
    await deleteSubscriptionMutation({
      subscriptionId,
      parentID: this.props.data.notifications.id,
    })
  };

  onTestSubscription = async subscriptionId => {
    console.log(['onTestSubscription'], subscriptionId);
    const {
      testSubscription: {
        statusCode,
      }
    } = await testSubscriptionMutation({
      subscriptionId,
    });

    return statusCode;
  };

  onDeleteSubscriptions = async () => {
    console.log(['onDeleteSubscriptions']);
    await deleteSubscriptionsMutation({
      ownerId: this.state.ownerId,
    })
  };

  render() {
    console.log(['SettingsFragment:render'], this.props, this.state);
    const { classes } = this.props;
    const { notifications } = this.state;
    const {
      general: {
        show,
        vibrate,
      },
      types: {
        events,
        meetings,
        todos,
        routines,
      },
    } = notifications;

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
                      onChange={(_, checked) => this.updateNotifications('general', 'show', checked)}
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
                      onChange={(_, checked) => this.updateNotifications('general', 'vibrate', checked)}
                      checked={vibrate}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Types</Typography>
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
                      onChange={(_, checked) => this.updateNotifications('types', 'events', checked)}
                      checked={events}
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
                      onChange={(_, checked) => this.updateNotifications('types', 'meetings', checked)}
                      checked={meetings}
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
                      onChange={(_, checked) => this.updateNotifications('types', 'routines', checked)}
                      checked={routines}
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
                      onChange={(_, checked) => this.updateNotifications('types', 'todos', checked)}
                      checked={todos}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Subscriptions</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SubscriptionsPagination
                className={classes.list}
                data={this.props.data.notifications}
                onDelete={this.onDeleteSubscription}
                onTest={this.onTestSubscription}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
        <Paper className={classes.section}>
          <Typography className={classes.display1} variant="display1" gutterBottom>
            Account
          </Typography>
          <div className={classes.accountContent}>
            <Button color="secondary" className={classes.button} onClick={this.handleCleanApplicationDialogOpen}>
              Delete account
              <DeleteForever />
            </Button>
            <Dialog
              open={this.state.cleanApplicationDialogOpen}
              onClose={this.handleCleanApplicationDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Clean application?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  It will erase all related data on database.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleCleanApplicationDialogClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={this.handleCleanApplication} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
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
      notifications {
        id
        general {
          show
          vibrate
        }
        types {
          id
          events
          meetings
          todos
          routines
        }
        ...SubscriptionsPagination
      }
    }
  `,
);

