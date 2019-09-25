import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  StyledComponentProps,
  Theme,
  Tooltip,
  Typography,
  withStyles,
} from '@material-ui/core';
import { green, grey, red, yellow } from '@material-ui/core/colors';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { CheckBox, CheckBoxOutlineBlank, ExpandMore, PriorityHigh, Slideshow } from '@material-ui/icons';
import graphql from 'babel-plugin-relay/macro';
import classNames from 'classnames';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { TaskStatusEnum } from '../../../mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';
import { TaskListFragment_data as TaskListFragmentResponse } from './__generated__/TaskListFragment_data.graphql';
import { FIELD_ID, TASK_STATUSES } from '../../../constans';
import TaskTypeIcon from '../../display/TaskTypeIcon';

const styles = (theme: Theme) => ({
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  content: {
    display: 'block',
  },
  heading: {
    maxHeight: '1.8em',
    overflow: 'scroll',
    flex: 1,
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: theme.spacing(1),
  },
  icon: {
    fontSize: theme.spacing(5),
  },
  green: {
    color: green[700],
  },
  grey: {
    color: grey[700],
  },
  red: {
    color: red[700],
  },
  taskTypeIcon: {
    marginTop: theme.spacing(1) * 1.5,
  },
  yellow: {
    color: yellow[700],
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  data: TaskListFragmentResponse;

  onDelete(id: string): void;
  onEdit(id: string): void;
}

class TaskListFragment extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const { classes, data, onDelete, onEdit } = this.props;
    const { id, taskType, fields } = data;
    const titleField = fields.find(field => field.fieldId === FIELD_ID.TITLE);
    const noteField = fields.find(field => field.fieldId === FIELD_ID.NOTE);
    const priorityField = fields.find(field => field.fieldId === FIELD_ID.PRIORITY);
    const statusField = fields.find(field => field.fieldId === FIELD_ID.STATUS);

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <div>
            {statusField && statusField.value && this.renderStatusTooltip(statusField.value.id as TaskStatusEnum)}
            {priorityField && priorityField.value && priorityField.value.enabled && (
              <Tooltip title="Important!">
                <PriorityHigh className={classNames(classes.red, classes.icon)} />
              </Tooltip>
            )}
          </div>
          <Typography className={classes.heading}>{titleField && titleField.value && titleField.value.text}</Typography>
          <TaskTypeIcon type={taskType} className={classes.taskTypeIcon} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.content}>
          <div>{noteField && noteField.value && noteField.value.text}</div>
          <div className={classes.actions}>
            <Button onClick={() => onEdit(id)}>Edit</Button>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  private renderStatusIcon(status: TaskStatusEnum): React.ReactElement<SvgIconProps> | null {
    const { classes } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    switch (status) {
      case TASK_STATUSES.TODO: {
        return <CheckBoxOutlineBlank className={classNames(classes.grey, classes.icon)} />;
      }
      case TASK_STATUSES.IN_PROGRESS: {
        return <Slideshow className={classNames(classes.yellow, classes.icon)} />;
      }
      case TASK_STATUSES.DONE: {
        return <CheckBox className={classNames(classes.green, classes.icon)} />;
      }
      default: {
        throw new Error(`no status icon for status: ${status}`);
      }
    }
  }

  private renderStatusTooltip(status: TaskStatusEnum): React.ReactNode {
    const icon = this.renderStatusIcon(status);

    return icon && <Tooltip title={`Status: ${status}`}>{icon}</Tooltip>;
  }
}

export default createFragmentContainer<Props>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  withStyles(styles)(TaskListFragment),
  {
    data: graphql`
      fragment TaskListFragment_data on TaskType {
        id
        taskType
        fields {
          ...SliderFieldFragment_data @relay(mask: false)
          ...SwitchFieldFragment_data @relay(mask: false)
          ...ChoiceFieldFragment_data @relay(mask: false)
          ...TextFieldFragment_data @relay(mask: false)
          ...NestedFieldFragment_data @relay(mask: false)
        }
      }
    `,
  },
);
