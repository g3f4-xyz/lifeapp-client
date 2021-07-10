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
import React, { ChangeEvent, FC } from 'react';
import { TASK_TYPE, TaskTypeEnum } from '../../../../../constans';
import useSaveNotificationsTypesSettingMutation from './useSaveNotificationsTypesSettingMutation';
import TaskTypeIcon from '../../../../display/task-type-icon/TaskTypeIcon';
import { useNotificationsTypesFragment$key } from './__generated__/useNotificationsTypesFragment.graphql';
import useNotificationsTypesFragment from './useNotificationsTypesFragment';
import useNotificationsTypesFragmentStyles from './useNotificationsTypesFragmentStyles';

interface NotificationsTypesProps {
  data: useNotificationsTypesFragment$key;
}

const NotificationsTypes: FC<NotificationsTypesProps> = (props) => {
  const { events, goals, meetings, routines, todos } = useNotificationsTypesFragment(props.data);
  const types = { events, goals, meetings, routines, todos };
  const classes = useNotificationsTypesFragmentStyles();
  const saveNotificationsTypesSettingMutation = useSaveNotificationsTypesSettingMutation();
  const getChangeHandler =
    (key: string) =>
    async (_: ChangeEvent<HTMLInputElement>, checked: boolean): Promise<void> => {
      await saveNotificationsTypesSettingMutation({
        types: {
          ...types,
          [key]: checked,
        },
      });
    };

  return (
    <ExpansionPanel className={classes.wrapper}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography>Types</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List className={classes.list}>
          {Object.keys(TASK_TYPE).map((key) => (
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
