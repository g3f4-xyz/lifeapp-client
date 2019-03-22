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
import { TASK_TYPE } from '../../../constans';
import saveNotificationsTypesSettingMutation from '../../../mutations/saveNotificationsTypesSettingMutation';
import TaskTypeIcon from '../../display/TaskTypeIcon';
import { TaskTypeEnum } from '../TaskList/__generated__/TaskListQuery.graphql';
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

  handleGoalsChange = async (_: ChangeEvent<HTMLInputElement>, goals: boolean): Promise<void> => {
    await saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        goals,
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

  getChangeHandler = (key: string) => async (_: ChangeEvent<HTMLInputElement>, checked: boolean): Promise<void> => {
    await saveNotificationsTypesSettingMutation({
      types: {
        ...this.props.data,
        ...{
          [key]: checked,
        },
      },
    });
  };

  render(): React.ReactNode {
    const { classes, data } = this.props;

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
            {Object.keys(TASK_TYPE).map(key => (
              <ListItem>
                <ListItemIcon>
                  <TaskTypeIcon type={key as TaskTypeEnum} />
                </ListItemIcon>
                <ListItemText primary={key.toLowerCase()} />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={this.getChangeHandler(`${key.toLowerCase()}s`)} checked={data[`${key.toLowerCase()}s`]}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
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
      goals
      meetings
      routines
      todos
    }
  `,
);
