import { CheckBox, CheckBoxOutlineBlank, ExpandMore, PriorityHigh, Slideshow } from '@material-ui/icons';
import { green, grey, red, yellow } from '@material-ui/core/colors';
import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Theme,
  Tooltip,
  Typography, withStyles,
} from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import classNames from 'classnames';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
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

interface Props {
  classes?: any;
  data: any;
  onDelete: any;
  onDetails: any;
  onEdit: any;
}

class TaskListFragment extends React.PureComponent<Props> {
  render() {
    const { classes, data, onDelete, onDetails, onEdit } = this.props;
    const { id, taskType, title, note, priority, status } = data;
    // @ts-ignore
    const TooltipIcon = {
      TODO: <CheckBoxOutlineBlank className={classNames(classes.grey, classes.icon)}/>,
      IN_PROGRESS: <Slideshow className={classNames(classes.yellow, classes.icon)}/>,
      DONE: <CheckBox className={classNames(classes.green, classes.icon)}/>,
    }[status];

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
          <div>
            {TooltipIcon && (
              <Tooltip title={`Status: ${status}`}>
                {TooltipIcon}
              </Tooltip>
            )}
            {priority && (
              <Tooltip title="Important!">
                <PriorityHigh className={classNames(classes.red, classes.icon)}/>
              </Tooltip>
            )}
          </div>
          <Typography className={classes.heading}>{title}</Typography>
          <TaskTypeIcon type={taskType} className={classes.taskTypeIcon}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.content}>
          <div>
            {note}
          </div>
          <div className={classes.actions}>
            <Button onClick={() => onDetails(id)}>Show</Button>
            <Button onClick={() => onEdit(id)}>Edit</Button>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
  `
);
