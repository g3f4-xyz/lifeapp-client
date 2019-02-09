// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import update from 'immutability-helper';
import React from 'react';
import { createFragmentContainer, RelayProp } from 'react-relay';
import editHandler from '../../../handlers/editHandler';
import saveTaskMutation from '../../../mutations/saveTaskMutation';
import { TaskFragment as TaskFragmentResponse } from './__generated__/TaskFragment.graphql';
import TaskDetails from './TaskDetails';
import TaskEdit from './TaskEdit';

const valueParser = (field: any) => {
  if (field.type === 'datetime-local') {
    return {
      ...field,
      value: {
        text: (new Date(field.value.text)),
      },
    };
  }

  return field;
};

interface Props {
  editMode: boolean;
  data: TaskFragmentResponse;
  isNew: boolean;
  taskListId: string;
  relay: RelayProp;
  onSaveDone(id: string): void;
}

class TaskFragment extends React.Component<Props, TaskFragmentResponse> {
  state = this.props.data || {};

  onSave = async () => {
    try {
      const { isNew, taskListId, onSaveDone } = this.props;
      const task = this.state;
      const id = isNew ? '' : task.id;

      if (task && task.fields) {
        await saveTaskMutation({
          isNew,
          task: {
            id,
            fields: task.fields.map(valueParser),
            taskType: task.taskType,
          },
          parentID: taskListId,
        });
        onSaveDone(id);
      }
    } catch (error) {
      throw error;
    }
  };

  // TODO fieldId i value nie powinno być unią
  updateFieldsValue = (fieldId: string | string[], value: string | string[]) => {
    const ids = Array.isArray(fieldId) ? fieldId : [fieldId];
    const values = Array.isArray(value) ? value : [value];
    const fields = this.state.fields ? this.state.fields : [];
    const fieldsUpdates = ids.reduce((acc, id, index) => {
      const fieldIndex = fields.findIndex((field) => field !== null && field.fieldId === id);

      return {
        ...acc,
        [fieldIndex]: {
          value: {
            $set: values[index],
          },
        },
      };
    }, {});

    this.setState(update(this.state, {
      fields: {
        ...fieldsUpdates,
      },
    }));
  };

  render(): React.ReactNode {
    const { editMode } = this.props;

    return editMode ? (
      <TaskEdit {...editHandler(this.state, this.updateFieldsValue, { onSave: this.onSave })} />
    ) : (
      <TaskDetails data={this.state} />
    );
  }
}

export default createFragmentContainer<Props>(
  TaskFragment,
  graphql`
    fragment FieldFragment on FieldType {
      fieldId
      helperText
      label
      order
      type
      format
      meta {
        ... on BoolMetaType {
          required
        }
        ... on ChoiceMetaType {
          defaultValue
          options {
            text
            value
          }
        }
        ... on NumberMetaType {
          max
          min
          required
        }
        ... on MultipleChoiceWithParentType {
          defaultValue
          parentID
          optionsSet {
            customValueOptionMask
            parentValue
            options {
              text
              value
            }
          }
        }
        ... on TextMetaType {
          maxLen
          minLen
          required
        }
      }
      value {
        ... on BoolValueType {
          bool
        }
        ... on ChoiceValueType {
          id
        }
        ... on MultipleChoiceWithParentValueType {
          customValueOptionValue
          ids
          parentValue
        }
        ... on NumberValueType {
          number
        }
        ... on TextValueType {
          text
        }
      }
    }
  `
);
