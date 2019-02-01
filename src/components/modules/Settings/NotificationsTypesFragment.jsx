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
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import Switch from '@material-ui/core/Switch';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import saveNotificationsTypesSettingMutation from '../../../mutations/saveNotificationsTypesSetting'
import TaskTypeIcon from '../../../components/display/TaskTypeIcon';
import { TASK_TYPES } from '../../../constans';

const styles = theme =>({
  expansionPanel: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  list: {
    width: '100%',
  },
});

class NotificationsTypes extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.object,
  };

  handleEventsChange = (_, events) => {
    saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        events,
      }
    });
  };

  handleMeetingsChange = (_, meetings) => {
    saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        meetings,
      }
    });
  };

  handleRoutinesChange = (_, routines) => {
    saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        routines,
      }
    });
  };

  handleTodosChange = (_, todos) => {
    saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        todos,
      }
    });
  };

  render() {
    const { classes, data: { events, meetings, routines, todos } } = this.props;

    return (
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Types</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon>
                <TaskTypeIcon type={TASK_TYPES.EVENT} />
              </ListItemIcon>
              <ListItemText primary="Events" />
              <ListItemSecondaryAction>
                <Switch onChange={this.handleEventsChange} checked={events} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskTypeIcon type={TASK_TYPES.MEETING} />
              </ListItemIcon>
              <ListItemText primary="Meetings" />
              <ListItemSecondaryAction>
                <Switch onChange={this.handleMeetingsChange} checked={meetings} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskTypeIcon type={TASK_TYPES.ROUTINE} />
              </ListItemIcon>
              <ListItemText primary="Routines" />
              <ListItemSecondaryAction>
                <Switch onChange={this.handleRoutinesChange} checked={routines} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskTypeIcon type={TASK_TYPES.TODO} />
              </ListItemIcon>
              <ListItemText primary="Todos" />
              <ListItemSecondaryAction>
                <Switch onChange={this.handleTodosChange} checked={todos} />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default createFragmentContainer(
  withStyles(styles)(NotificationsTypes),
  graphql`
    fragment NotificationsTypesFragment on NotificationsTypesSettingType {
      events
      meetings
      routines
      todos
    }
  `,
);

