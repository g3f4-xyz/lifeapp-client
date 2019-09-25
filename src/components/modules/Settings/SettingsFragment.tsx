import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Paper,
  StyledComponentProps,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core';
import { DeleteForever, ExpandMore } from '@material-ui/icons';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import cleanApplicationMutation from '../../../mutations/cleanApplicationMutation';
import deleteSubscriptionMutation from '../../../mutations/deleteSubscriptionMutation';
import registerUserSubscription from '../../../serviceWorker/registerUserSubscription';
import { SettingsFragment_data as SettingsFragmentResponse } from './__generated__/SettingsFragment_data.graphql';
import NotificationsGeneralFragment from './NotificationsGeneralFragment';
import NotificationsTypesFragment from './NotificationsTypesFragment';
import SubscriptionsPagination from './SubscriptionsPagination';

const styles = (theme: Theme) => ({
  accountContent: {
    display: 'flex',
    justifyContent: 'center'
  },
  subscriptionsWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  list: {
    width: '100%'
  },
  section: {
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  subscriptionButton: {
    textAlign: 'right',
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  subscriptionsPaginationExpansionPanel: {
    paddingRight: theme.spacing(1)
  },
  notificationsInfoWrapper: {
    textAlign: 'right',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  data: SettingsFragmentResponse;
}

interface State {
  cleanApplicationDialogOpen: boolean;
  notificationPermission: NotificationPermission;
}

class SettingsFragment extends React.Component<Props, State> {
  state = {
    cleanApplicationDialogOpen: false,
    notificationPermission: Notification.permission
  };

  handleCleanApplicationDialogClose = () => {
    this.setState({ cleanApplicationDialogOpen: false });
  };

  handleCleanApplicationDialogOpen = () => {
    this.setState({ cleanApplicationDialogOpen: true });
  };

  handleCleanApplication = async () => {
    const { cleanApplication } = await cleanApplicationMutation({
      ownerId: this.props.data.ownerId
    });

    window.location.href = cleanApplication && cleanApplication.navigationUrl ? cleanApplication.navigationUrl : '';
  };

  handleActivateNotifications = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;

      await registerUserSubscription(registration);

      this.forceUpdate();
    } catch (e) {
      console.error(['handleActivateNotifications.error'], e);
      this.forceUpdate();
    }
  };

  onDeleteSubscription = async (subscriptionId: string) => {
    await deleteSubscriptionMutation({
      subscriptionId,
      parentID: this.props.data.notifications.id
    });
  };

  render(): React.ReactNode {
    const { classes } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <div>
        <Paper className={classes.section}>
          <Typography align="center" variant="h4">
            Notifications
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={4}>
              <NotificationsGeneralFragment data={this.props.data.notifications.general} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <NotificationsTypesFragment data={this.props.data.notifications.types} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ExpansionPanel className={classes.subscriptionsWrapper}>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  <Typography>Subscriptions</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.subscriptionsPaginationExpansionPanel}>
                  <SubscriptionsPagination
                    className={classes.list}
                    data={this.props.data.notifications}
                    onDelete={this.onDeleteSubscription}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
          {Notification.permission === 'granted' && (
            <div className={classes.notificationsInfoWrapper}>
              <Typography color="textSecondary" gutterBottom>
                Notifications are active.
              </Typography>
            </div>
          )}
          {Notification.permission === 'default' && (
            <div className={classes.notificationsInfoWrapper}>
              <Button onClick={this.handleActivateNotifications}>Activate notifications</Button>
            </div>
          )}
          {Notification.permission === 'denied' && (
            <div className={classes.notificationsInfoWrapper}>
              <Typography color="textSecondary" gutterBottom>
                You have denied notifications permission.
                <br />
                You can change it in your browser notifications options.
              </Typography>
            </div>
          )}
        </Paper>
        <Paper className={classes.section}>
          <Typography align="center" variant="h4">
            Account
          </Typography>
          <div className={classes.accountContent}>
            <Button color="secondary" onClick={this.handleCleanApplicationDialogOpen}>
              Delete account
              <DeleteForever />
            </Button>
            <Dialog
              open={this.state.cleanApplicationDialogOpen}
              onClose={this.handleCleanApplicationDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{'Clean application?'}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">It will erase all related data on database.</DialogContentText>
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

export default createFragmentContainer<Props>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  withStyles(styles)(SettingsFragment),
  {
    data: graphql`
      fragment SettingsFragment_data on SettingsType {
        id
        ownerId
        notifications {
          id
          general {
            ...NotificationsGeneralFragment_data
          }
          types {
            ...NotificationsTypesFragment_data
          }
          ...SubscriptionsPagination_data
        }
      }
    `
  }
);
