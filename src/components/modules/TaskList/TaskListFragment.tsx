import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary, StyledComponentProps,
  Theme,
  Tooltip,
  Typography, withStyles,
} from '@material-ui/core';
import { green, grey, red, yellow } from '@material-ui/core/colors';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { CheckBox, CheckBoxOutlineBlank, ExpandMore, PriorityHigh, Slideshow } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import classNames from 'classnames';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { TASK_STATUSES } from '../../../constans';
import TaskTypeIcon from '../../display/TaskTypeIcon';
import { TaskListFragment as TaskListFragmentResponse, TaskStatusEnum } from './__generated__/TaskListFragment.graphql';

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
    flex: 1,
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: theme.spacing.unit,
  },
  icon: {
    fontSize: theme.spacing.unit * 5,
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
    marginTop: theme.spacing.unit * 1.5,
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
    const { id, taskType, title, note, priority, status } = data;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <div>
            {this.renderStatusTooltip(status)}
            {priority && (
              <Tooltip title="Important!">
                <PriorityHigh className={classNames(classes.red, classes.icon)} />
              </Tooltip>
            )}
          </div>
          <Typography className={classes.heading}>{title}</Typography>
          <TaskTypeIcon type={taskType} className={classes.taskTypeIcon} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.content}>
          <div>
            {note}
          </div>
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
        return (
          <CheckBoxOutlineBlank className={classNames(classes.grey, classes.icon)} />
        );
      }
      case TASK_STATUSES.IN_PROGRESS: {
        return (
          <Slideshow className={classNames(classes.yellow, classes.icon)} />
        );
      }
      case TASK_STATUSES.DONE: {
        return (
          <CheckBox className={classNames(classes.green, classes.icon)} />
        );
      }
      default: {
        throw new Error(`no status icon for status: ${status}`);
      }
    }
  }

  private renderStatusTooltip(status: TaskStatusEnum): React.ReactNode {
    const icon = this.renderStatusIcon(status);

    return icon && (
      <Tooltip title={`Status: ${status}`}>
        {icon}
      </Tooltip>
    );
  }
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(TaskListFragment),
  graphql`
    fragment TaskListFragment on TaskType {
      id
      taskType
      note
      title
      priority
      status
    }
  `,
);
