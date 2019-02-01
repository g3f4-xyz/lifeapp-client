import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import VibrationIcon from '@material-ui/icons/Vibration';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import Switch from '@material-ui/core/Switch';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import saveNotificationsGeneralSettingMutation from '../../../mutations/saveNotificationsGeneralSetting'

const styles = theme =>({
  expansionPanel: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  list: {
    width: '100%',
  },
});

class NotificationsGeneral extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
  };

  handleShowChange = (_, show) => {
    saveNotificationsGeneralSettingMutation({
      general: {
        ...this.props.data,
        show,
      }
    });
  };

  handleVibrateChange = (_, vibrate) => {
    saveNotificationsGeneralSettingMutation({
      general: {
        ...this.props.data,
        vibrate,
      }
    });
  };

  render() {
    const { classes, data: { show, vibrate } } = this.props;

    return (
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>General</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon>
                <SlideshowIcon />
              </ListItemIcon>
              <ListItemText primary="Show" />
              <ListItemSecondaryAction>
                <Switch onChange={this.handleShowChange} checked={show} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VibrationIcon />
              </ListItemIcon>
              <ListItemText primary="Vibrate" />
              <ListItemSecondaryAction>
                <Switch onChange={this.handleVibrateChange} checked={vibrate} />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default createFragmentContainer(
  withStyles(styles)(NotificationsGeneral),
  graphql`
    fragment NotificationsGeneralFragment on NotificationsGeneralSettingType {
      show
      vibrate
    }
  `,
);

