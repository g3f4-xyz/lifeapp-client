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
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import { DeleteForever, Done, ExpandMore } from '@material-ui/icons';
import graphql from 'babel-plugin-relay/macro';
import React, { FC, useCallback, useState } from 'react';
import { createFragmentContainer } from 'react-relay';
import { useHistory } from 'react-router-dom';
import { MODULES_IDS } from '../../../../constans';
import cleanApplicationMutation from '../../../../mutations/cleanApplicationMutation';
import deleteSubscriptionMutation from '../../../../mutations/deleteSubscriptionMutation';
import registerUserSubscription from '../../../../service-worker/registerUserSubscription';
import NotificationsGeneralFragment from '../notifications/general/NotificationsGeneralFragment';
import NotificationsTypesFragment from '../notifications/types/NotificationsTypesFragment';
import useSettingsFragmentStyles from '../subscriptions/fragment/useSettingsFragmentStyles';
import SubscriptionsPagination from '../subscriptions/pagination/SubscriptionsPagination';
import { SettingsFragment_data as SettingsFragmentResponse } from './__generated__/SettingsFragment_data.graphql';

export interface SettingsFragmentProps {
  data: SettingsFragmentResponse;
}

const SettingsFragment: FC<SettingsFragmentProps> = props => {
  const classes = useSettingsFragmentStyles();
  const [cleanApplicationDialogOpen, setCleanApplicationDialogOpen] = useState(false);
  const history = useHistory();

  const handleDone = useCallback(() => {
    history.push(`/app/${MODULES_IDS.TASK_LIST}`);
  }, [history]);

  const handleCleanApplicationDialogClose = () => {
    setCleanApplicationDialogOpen(false);
  };

  const handleCleanApplicationDialogOpen = () => {
    setCleanApplicationDialogOpen(true);
  };

  const handleCleanApplication = async () => {
    const { cleanApplication } = await cleanApplicationMutation({
      ownerId: props.data.ownerId,
    });

    window.location.href =
      cleanApplication && cleanApplication.navigationUrl ? cleanApplication.navigationUrl : '';
  };

  const handleActivateNotifications = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;

      await registerUserSubscription(registration);

      // this.forceUpdate();
    } catch (e) {
      console.error(['handleActivateNotifications.error'], e);
      // this.forceUpdate();
    }
  };

  const onDeleteSubscription = async (subscriptionId: string) => {
    await deleteSubscriptionMutation({
      subscriptionId,
      parentID: props.data.notifications.id,
    });
  };

  return (
    <div>
      <Paper className={classes.section}>
        <Typography align="center" variant="h4">
          Notifications
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}>
            <NotificationsGeneralFragment data={props.data.notifications.general} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <NotificationsTypesFragment data={props.data.notifications.types} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ExpansionPanel className={classes.subscriptionsWrapper}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography>Subscriptions</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.subscriptionsPaginationExpansionPanel}>
                <SubscriptionsPagination
                  className={classes.list}
                  data={props.data.notifications}
                  onDelete={onDeleteSubscription}
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
            <Button onClick={handleActivateNotifications}>Activate notifications</Button>
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
          <Button color="secondary" onClick={handleCleanApplicationDialogOpen}>
            Delete account
            <DeleteForever />
          </Button>
          <Dialog
            open={cleanApplicationDialogOpen}
            onClose={handleCleanApplicationDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{'Clean application?'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                It will erase all related data on database.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCleanApplicationDialogClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleCleanApplication} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Paper>
      <IconButton className={classes.doneButton} color="primary" onClick={handleDone}>
        <Done className={classes.doneButtonIcon} />
      </IconButton>
    </div>
  );
};

export default createFragmentContainer<SettingsFragmentProps>(SettingsFragment, {
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
  `,
});
