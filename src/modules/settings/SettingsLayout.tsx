import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import { DeleteForever, Done, ExpandMore } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MODULES_IDS } from '../../constans';
import registerUserSubscription from '../../service-worker/registerUserSubscription';
import { useSettingsFragment$key } from './__generated__/useSettingsFragment.graphql';
import NotificationsGeneral from './notifications/general/NotificationsGeneral';
import NotificationsTypes from './notifications/types/NotificationsTypes';
import SubscriptionList from './subscriptions/list/SubscriptionList';
import useDeleteSubscriptionMutation from './useDeleteSubscriptionMutation';
import useSettingsFragment from './useSettingsFragment';
import useSettingsStyles from './useSettingsStyles';

export default function SettingsLayout(props: { data: useSettingsFragment$key }) {
  const data = useSettingsFragment(props.data);
  const classes = useSettingsStyles();
  const [cleanApplicationDialogOpen, setCleanApplicationDialogOpen] = useState(false);
  const history = useHistory();
  const deleteSubscriptionMutation = useDeleteSubscriptionMutation(data.notifications.id);
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
    console.log('TOOD');
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
            <NotificationsGeneral
              data={data.notifications.general}
              notificationsRecordId={data.notifications.id}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <NotificationsTypes
              data={data.notifications}
              notificationsRecordId={data.notifications.id}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Accordion className={classes.subscriptionsWrapper}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Subscriptions</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.subscriptionsPaginationExpansionPanel}>
                <SubscriptionList
                  className={classes.list}
                  data={data.notifications}
                  onDelete={onDeleteSubscription}
                />
              </AccordionDetails>
            </Accordion>
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
}
