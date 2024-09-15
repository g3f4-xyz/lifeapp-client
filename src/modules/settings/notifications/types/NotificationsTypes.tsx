import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React, { ChangeEvent } from 'react';
import TaskTypeIcon from '../../../../display/task-type-icon/TaskTypeIcon';
import useNotificationsTaskTypesFragment from './useNotificationsTaskTypesFragment';
import useNotificationsTypesStyles from './useNotificationsTypesStyles';
import useSaveNotificationsTypesSettingMutation from './useSaveNotificationsTypesSettingMutation';
import { useNotificationsTaskTypesFragment$key } from './__generated__/useNotificationsTaskTypesFragment.graphql';

export default function NotificationsTypes(props: {
  data: useNotificationsTaskTypesFragment$key;
  notificationsRecordId: string;
}) {
  const { types } = useNotificationsTaskTypesFragment(props.data);
  const classes = useNotificationsTypesStyles();
  const saveNotificationsTypesSettingMutation = useSaveNotificationsTypesSettingMutation(
    props.notificationsRecordId,
  );
  const getChangeHandler =
    (taskTypeId: string) =>
    async (_: ChangeEvent<HTMLInputElement>, enabled: boolean): Promise<void> => {
      await saveNotificationsTypesSettingMutation({
        types: types.map((item) => (item.taskTypeId === taskTypeId ? { ...item, enabled } : item)),
      });
    };

  return (
    <Accordion className={classes.wrapper}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>Types</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List className={classes.list}>
          {types.map(({ taskTypeId, enabled }) => (
            <ListItem key={taskTypeId}>
              <ListItemIcon>
                <TaskTypeIcon type={taskTypeId} />
              </ListItemIcon>
              {/* TODO task type label */}
              <ListItemText primary={taskTypeId} />
              <ListItemSecondaryAction>
                <Switch onChange={getChangeHandler(taskTypeId)} checked={enabled} />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
