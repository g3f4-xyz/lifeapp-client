import { IconButton, Paper, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
import { Done } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer, RelayProp } from 'react-relay';
import TaskTypeIcon from '../../display/TaskTypeIcon';
import {
  TaskFragment as TaskFragmentResponse,
} from './__generated__/TaskFragment.graphql';
import FieldFragment from './Field/FieldFragment';

const styles = (theme: Theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
    minHeight: 50,
  },
  rowField: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  doneButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 72,
    width: 72,
  },
  doneButtonIcon: {
    color: '#8BC34A',
    fontSize: 72,
  },
});

interface Props extends StyledComponentProps<keyof ReturnType<typeof styles>> {
  editMode: boolean;
  data: TaskFragmentResponse;
  isNew: boolean;
  taskListId: string;
  relay: RelayProp;
  onDone(id: string): void;
}

class Task extends React.Component<Props, TaskFragmentResponse> {
  state = this.props.data || {};

  handleDone = () => {
    this.props.onDone(this.props.data.id);
  };

  render(): React.ReactNode {
    const { classes, data, onDone } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fields, taskType } = data;

    const fieldsGroupedByOrder = fields.reduce((acc, field) => {
      const { order } = field;

      if (!acc[order as number]) {
        acc[order as number] = [];
      }

      (acc[order as number] as any).push(field);

      return acc;
    }, new Array<typeof fields>());

    return (
      <div>
        <TaskTypeIcon type={taskType} />
        {fieldsGroupedByOrder.map((fieldsInRow, key) => (
          <Paper className={classes.row} key={key}>
            {fieldsInRow.map((field) => (
              <FieldFragment key={field.fieldId} data={field} taskId={data.id} />
            ))}
          </Paper>
        ))}
        <IconButton
          className={classes.doneButton}
          color="primary"
          onClick={this.handleDone}
        >
          <Done className={classes.doneButtonIcon} />
        </IconButton>
      </div>
    );
  }
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  withStyles(styles)(Task),
  graphql`
    fragment TaskFragment on TaskType {
      id
      taskType
      fields {
        fieldId
        order
        ...FieldFragment
      }
    }
  `,
);
