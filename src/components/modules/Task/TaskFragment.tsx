import { withStyles } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import update from 'immutability-helper';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import editHandler from '../../../handlers/editHandler';
import saveTaskMutation from '../../../mutations/saveTaskMutation';
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
  editMode: any;
  data: any;
  isNew: any;
  taskListId: any;
  onSaveDone: any;
}

class TaskFragment extends React.Component<Props, any> {
  state = this.props.data;

  onSave = async () => {
    const { isNew, taskListId, onSaveDone } = this.props;
    const task = this.state;
    const id = isNew ? '' : task.id;

    try {
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
    } catch (error) {
      console.error(['TaskEdit:onSave:error'], error);
    }
  };

  updateFieldsValue = (fieldId: any, value: any) => {
    const ids = Array.isArray(fieldId) ? fieldId : [fieldId];
    const values = Array.isArray(value) ? value : [value];
    const fieldsUpdates = ids.reduce((acc, id, index) => {
      const fieldIndex = this.state.fields.findIndex((field: any) => field.fieldId === id);

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

  render() {
    const { editMode } = this.props;

    return editMode ? (
      <TaskEdit {...editHandler(this.state, this.updateFieldsValue, { onSave: this.onSave })} />
    ) : (
      <TaskDetails data={this.state}/>
    );
  }
}

export default createFragmentContainer(
  TaskFragment,
  graphql`
    fragment TaskFragment on TaskType {
      id
      taskType
      fields {
        fieldId
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
  `
);
