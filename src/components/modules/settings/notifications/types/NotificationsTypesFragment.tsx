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
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent, FC, useContext } from 'react';
import { createFragmentContainer } from 'react-relay';
import { TASK_TYPE, TaskTypeEnum } from '../../../../../constans';
import saveNotificationsTypesSettingMutation from '../../../../../mutations/saveNotificationsTypesSettingMutation';
import TaskTypeIcon from '../../../../display/task-type-icon/TaskTypeIcon';
// eslint-disable-next-line @typescript-eslint/camelcase
import { NotificationsTypesFragment_data } from './__generated__/NotificationsTypesFragment_data.graphql';
import useNotificationsTypesFragmentStyles from './useNotificationsTypesFragmentStyles';
import RelayEnvironmentContext from '../../../../../contexts/RelayEnvironmentContext';

interface NotificationsTypesProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: NotificationsTypesFragment_data;
}

const NotificationsTypes: FC<NotificationsTypesProps> = props => {
  const { data } = props;
  const classes = useNotificationsTypesFragmentStyles();
  const environment = useContext(RelayEnvironmentContext);
  const getChangeHandler = (key: string) => async (
    _: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): Promise<void> => {
    await saveNotificationsTypesSettingMutation(
      {
        types: {
          ...props.data,
          ...{
            [key]: checked,
          },
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
                  checked={data[`${key.toLowerCase()}s`]}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default createFragmentContainer(NotificationsTypes, {
  data: graphql`
    fragment NotificationsTypesFragment_data on TypesNotificationsSettings {
      events
      goals
      meetings
      routines
      todos
    }
  `,
});
