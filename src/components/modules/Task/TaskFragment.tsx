import { Paper, StyledComponentProps, Theme, withStyles } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer, RelayProp } from 'react-relay';
import TaskTypeIcon from '../../display/TaskTypeIcon';
import {
  TaskFragment as TaskFragmentResponse,
} from './__generated__/TaskFragment.graphql';
import FieldFragment from './FieldFragment';

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
  addButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 72,
    width: 72,
  },
  addButtonIcon: {
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
  onSaveDone(id: string): void;
}

class Task extends React.Component<Props, TaskFragmentResponse> {
  state = this.props.data || {};

  // onSave = async () => {
  //   try {
  //     const { isNew, taskListId, onSaveDone } = this.props;
  //     const task = this.state;
  //     const id = isNew ? '' : task.id;
  //
  //     if (task && task.fields) {
  //       await saveTaskMutation({
  //         isNew,
  //         task: {
  //           id,
  //           fields: task.fields,
  //           taskType: task.taskType,
  //         },
  //         parentID: taskListId,
  //       });
  //       onSaveDone(id);
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // TODO fieldId i value nie powinno być unią
  // updateFieldsValue = (fieldId: string | string[], value: FieldValue | FieldValue[]) => {
  //   const ids = Array.isArray(fieldId) ? fieldId : [fieldId];
  //   const values = Array.isArray(value) ? value : [value];
  //   const fields = this.state.fields ? this.state.fields : [];
  //   const fieldsUpdates = ids.reduce((acc, id, index) => {
  //     const fieldIndex = fields.findIndex((field) => field !== null && field.fieldId === id);
  //
  //     return {
  //       ...acc,
  //       [fieldIndex]: {
  //         value: {
  //           $set: values[index],
  //         },
  //       },
  //     };
  //   }, {});
  //
  //   this.setState(update(this.state, {
  //     fields: {
  //       ...fieldsUpdates,
  //     },
  //   }));
  // };

  render(): React.ReactNode {
    const { classes, data } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { fields, taskType } = data;

    // const { fields, onSave, taskType } = editHandler(this.state, this.updateFieldsValue, { onSave: this.onSave });

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
