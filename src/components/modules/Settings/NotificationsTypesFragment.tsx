import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText, StyledComponentProps,
  Switch,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent } from 'react';
import { createFragmentContainer } from 'react-relay';
import { TASK_TYPES } from '../../../constans';
import saveNotificationsTypesSettingMutation from '../../../mutations/saveNotificationsTypesSettingMutation';
import TaskTypeIcon from '../../display/TaskTypeIcon';
import { NotificationsTypesFragment } from './__generated__/NotificationsTypesFragment.graphql';

const styles = (theme: Theme) => ({
  wrapper: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  list: {
    width: '100%',
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  data: NotificationsTypesFragment;
}

class NotificationsTypes extends React.Component<Props> {
  handleEventsChange = async (_: ChangeEvent<HTMLInputElement>, events: boolean): Promise<void> => {
    await saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        events,
      },
    });
  };

  handleMeetingsChange = async (_: ChangeEvent<HTMLInputElement>, meetings: boolean): Promise<void> => {
    await saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        meetings,
      },
    });
  };

  handleRoutinesChange = async (_: ChangeEvent<HTMLInputElement>, routines: boolean): Promise<void> => {
    await saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        routines,
      },
    });
  };

  handleTodosChange = async (_: ChangeEvent<HTMLInputElement>, todos: boolean): Promise<void> => {
    await saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        todos,
      },
    });
  };

  render(): React.ReactNode {
    const { classes, data: { events, meetings, routines, todos } } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <ExpansionPanel className={classes.wrapper}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
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
