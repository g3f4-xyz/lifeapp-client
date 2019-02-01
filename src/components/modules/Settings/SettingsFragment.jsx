import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteForever from '@material-ui/icons/DeleteForever';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import cleanApplicationMutation from '../../../mutations/cleanApplication';
import deleteSubscriptionMutation from '../../../mutations/deleteSubscription';
import deleteSubscriptionsMutation from '../../../mutations/deleteSubscriptions';
import testSubscriptionMutation from '../../../mutations/testSubscription';
import SubscriptionsPagination from './SubscriptionsPagination';
import NotificationsGeneralFragment from './NotificationsGeneralFragment';
import NotificationsTypesFragment from './NotificationsTypesFragment';

const styles = theme =>({
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
  subscriptionsPaginationExpansionPanel: {
    paddingRight: theme.spacing.unit,
  },
});

class SettingsFragment extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
  };

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
    const { cleanApplication: { navigationUrl } } = await cleanApplicationMutation({
      ownerId: this.props.data.ownerId,
    });

    window.location.href = navigationUrl;
  };

  onDeleteSubscription = async subscriptionId => {
    await deleteSubscriptionMutation({
      subscriptionId,
      parentID: this.props.data.notifications.id,
    })
  };

  onTestSubscription = async subscriptionId => {
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
    await deleteSubscriptionsMutation({
      ownerId: this.state.ownerId,
    })
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Paper className={classes.section}>
          <Typography align="center" variant="display1">
            Notifications
          </Typography>
          <NotificationsGeneralFragment data={this.props.data.notifications.general} />
          <NotificationsTypesFragment data={this.props.data.notifications.types} />
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
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
          ...NotificationsGeneralFragment
        }
        types {
          ...NotificationsTypesFragment
        }
        ...SubscriptionsPagination
      }
    }
  `,
);

