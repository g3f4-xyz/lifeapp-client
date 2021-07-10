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
import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MODULES_IDS } from '../../../../constans';
import SubscriptionsList from '../subscriptions/list/SubscriptionsList';
import useCleanApplicationMutation from './useCleanApplicationMutation';
import useDeleteSubscriptionMutation from './useDeleteSubscriptionMutation';
import registerUserSubscription from '../../../../service-worker/registerUserSubscription';
import NotificationsGeneralFragment from '../notifications/general/NotificationsGeneralFragment';
import NotificationsTypesFragment from '../notifications/types/NotificationsTypesFragment';
import { useSettingsFragment$key } from './__generated__/useSettingsFragment.graphql';
import useSettingsFragment from './useSettingsFragment';
import useSettingsStyles from './useSettingsStyles';

export interface SettingsFragmentProps {
  data: useSettingsFragment$key;
}

const SettingsFragment: FC<SettingsFragmentProps> = (props) => {
  const data = useSettingsFragment(props.data);
  const classes = useSettingsStyles();
  const [cleanApplicationDialogOpen, setCleanApplicationDialogOpen] = useState(false);
  const history = useHistory();
  const deleteSubscriptionMutation = useDeleteSubscriptionMutation(data.notifications.id);
  const cleanApplicationMutation = useCleanApplicationMutation();

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
      ownerId: data.ownerId,
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
            <NotificationsGeneralFragment data={data.notifications.general} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <NotificationsTypesFragment data={data.notifications.types} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ExpansionPanel className={classes.subscriptionsWrapper}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography>Subscriptions</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.subscriptionsPaginationExpansionPanel}>
                <SubscriptionsList
                  className={classes.list}
                  data={data.notifications}
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

export default SettingsFragment;
