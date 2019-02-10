// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import update from 'immutability-helper';
import React from 'react';
import { createFragmentContainer, RelayProp } from 'react-relay';
import editHandler from '../../../handlers/editHandler';
import saveTaskMutation from '../../../mutations/saveTaskMutation';
import {
  FieldFormatEnum,
  TaskFragment as TaskFragmentResponse,
  TaskTypeEnum,
} from './__generated__/TaskFragment.graphql';
import TaskDetails from './TaskDetails';
import TaskEdit from './TaskEdit';

export interface FieldMeta {
  readonly required?: boolean;
  readonly defaultValue?: string | null;
  readonly options?: ReadonlyArray<({
    readonly text: string;
    readonly value: string;
  }) | null>;
  readonly max?: number;
  readonly min?: number;
  readonly parentID?: string;
  readonly optionsSet?: ReadonlyArray<({
    readonly customValueOptionMask: string;
    readonly parentValue: string;
    readonly options: ReadonlyArray<({
      readonly text: string;
      readonly value: string;
    }) | null> | null;
  }) | null>;
  readonly maxLen?: number;
  readonly minLen?: number;
}

export interface FieldValue {
  readonly bool?: boolean | null;
  readonly id?: string | null;
  readonly customValueOptionValue?: string | null;
  readonly ids?: ReadonlyArray<string | null>;
  readonly parentValue?: string | null;
  readonly number?: number | null;
  readonly text?: string | null;
}

export interface Task {
  readonly id: string;
  readonly taskType: TaskTypeEnum;
  readonly fields: ReadonlyArray<Field>;
}

export interface Field {
  readonly fieldId: string;
  readonly helperText: string;
  readonly label: string;
  readonly order: number;
  readonly type: string;
  readonly format: FieldFormatEnum;
  readonly meta: FieldMeta;
  readonly value: FieldValue;
}

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
            fields: task.fields,
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
  updateFieldsValue = (fieldId: string | string[], value: FieldValue | FieldValue[]) => {
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
    fragment TaskFragment on TaskType {
      id
      taskType
      fields {
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
    }
  `,
);
