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
  Paper,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';
import { DeleteForever, ExpandMore } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import cleanApplicationMutation from '../../../mutations/cleanApplicationMutation';
import deleteSubscriptionMutation from '../../../mutations/deleteSubscriptionMutation';
import testSubscriptionMutation from '../../../mutations/testSubscriptionMutation';
import { registerSubscription } from '../../../serviceWorkers/subscriptionServiceWorker';
import NotificationsGeneralFragment from './NotificationsGeneralFragment';
import NotificationsTypesFragment from './NotificationsTypesFragment';
import SubscriptionsPagination from './SubscriptionsPagination';

const styles = (theme: Theme) => ({
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
  section: {
    margin: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
  },
  subscriptionButton: {
    textAlign: 'right',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  subscriptionsPaginationExpansionPanel: {
    paddingRight: theme.spacing.unit,
  },
});

interface Props {
  classes?: any;
  data: any;
}

interface State {
  cleanApplicationDialogOpen: boolean;
}

class SettingsFragment extends React.Component<Props, State> {
  state = {
    cleanApplicationDialogOpen: false,
  };

  handleCleanApplicationDialogClose = () => {
    this.setState({ cleanApplicationDialogOpen: false });
  };

  handleCleanApplicationDialogOpen = () => {
    this.setState({ cleanApplicationDialogOpen: true });
  };


  handleCleanApplication = async () => {
    const { cleanApplication } = await cleanApplicationMutation({
      ownerId: this.props.data.ownerId,
    });

    window.location.href = cleanApplication && cleanApplication.navigationUrl ? cleanApplication.navigationUrl : '';
  };

  onDeleteSubscription = async (subscriptionId: any) => {
    await deleteSubscriptionMutation({
      subscriptionId,
      parentID: this.props.data.notifications.id,
    });
  };

  onTestSubscription = async (subscriptionId: any) => {
    const {
      testSubscription: {
        statusCode,
      },
    }: any = await testSubscriptionMutation({
      subscriptionId,
    });

    return statusCode;
  };

  onNotificationsActivate = async (): Promise<void> => {
    try {
      await registerSubscription()
    } catch (e) {
      console.error(e);
    }
  };

  render(): React.ReactNode {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Paper className={classes.section}>
          <Typography align="center" variant="display1">
            Notifications
          </Typography>
          <div className={classes.subscriptionButton}>
            <Button onClick={this.onNotificationsActivate}>
              Activate notifications for this browser
            </Button>
          </div>
          <NotificationsGeneralFragment data={this.props.data.notifications.general}/>
          <NotificationsTypesFragment data={this.props.data.notifications.types}/>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
              <Typography className={classes.heading}>Subscriptions</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.subscriptionsPaginationExpansionPanel}>
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
          <Typography align="center" variant="display1">
            Account
          </Typography>
          <div className={classes.accountContent}>
            <Button color="secondary" className={classes.button} onClick={this.handleCleanApplicationDialogOpen}>
              Delete account
              <DeleteForever/>
            </Button>
            <Dialog
              open={this.state.cleanApplicationDialogOpen}
              onClose={this.handleCleanApplicationDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'Clean application?'}
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

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(SettingsFragment),
  graphql`
    fragment SettingsFragment on SettingsType {
      id
      ownerId
      notifications {
        id
        general {
          ...NotificationsGeneralFragment
        }
        types {
          ...NotificationsTypesFragment
        }
        ...SubscriptionsPagination
      }
    }
  `
);
