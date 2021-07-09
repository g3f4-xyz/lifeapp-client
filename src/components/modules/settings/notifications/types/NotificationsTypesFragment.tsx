import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React, { ChangeEvent, FC, useContext } from 'react';
import { TASK_TYPE, TaskTypeEnum } from '../../../../../constans';
import saveNotificationsTypesSettingMutation from '../../../../../mutations/saveNotificationsTypesSettingMutation';
import TaskTypeIcon from '../../../../display/task-type-icon/TaskTypeIcon';
import useNotificationsTypesFragmentStyles from './useNotificationsTypesFragmentStyles';
import RelayEnvironmentContext from '../../../../../contexts/RelayEnvironmentContext';
import { useNotificationsTypesFragment$ref } from './__generated__/useNotificationsTypesFragment.graphql';
import useNotificationsTypesFragment from './useNotificationsTypesFragment';

interface NotificationsTypesProps {
  data: useNotificationsTypesFragment$ref;
}

const NotificationsTypes: FC<NotificationsTypesProps> = props => {
  const { events, goals, meetings, routines, todos } = useNotificationsTypesFragment(props.data);
  const types = { events, goals, meetings, routines, todos };
  const classes = useNotificationsTypesFragmentStyles();
  const environment = useContext(RelayEnvironmentContext);
  const getChangeHandler = (key: string) => async (
    _: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): Promise<void> => {
    await saveNotificationsTypesSettingMutation(
      {
        types: {
          ...types,
          [key]: checked,
        },
      },
      environment,
    );
  };

  return (
    <ExpansionPanel className={classes.wrapper}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography>Types</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List className={classes.list}>
          {Object.keys(TASK_TYPE).map(key => (
            <ListItem key={key}>
              <ListItemIcon>
                <TaskTypeIcon type={key as TaskTypeEnum} />
              </ListItemIcon>
              <ListItemText primary={key.toLowerCase()} />
              <ListItemSecondaryAction>
                <Switch
                  onChange={getChangeHandler(`${key.toLowerCase()}s`)}
                  checked={types[`${key.toLowerCase()}s`]}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default NotificationsTypes;
