import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import update from 'immutability-helper';
import TaskDetails from './TaskDetails';
import TaskEdit from './TaskEdit';
import saveTaskMutation from '../../../mutations/saveTask';
import editHandler from '../../../handlers/editHandler';

const valueParser= field => {
  if (field.type === 'datetime-local') {
    return {
      ...field,
      value: {
        text: (new Date(field.value.text)),
      }
    }
  }

  return field;
};

class TaskFragment extends React.Component {
  static propTypes = {
    editMode: PropTypes.bool,
    data: PropTypes.object,
    onSaveDone: PropTypes.func,
  };

  state = this.props.data;

  onSave = async () => {
    const { isNew, taskListId, onSaveDone } = this.props;
    const task = this.state;
    const id = isNew ? '' : task.id;
    console.log(['TaskEdit:onSave'], this.state);
    console.log(['TaskEdit:fields'], task.fields);
    console.log(['TaskEdit:parsedFields'], task.fields.map(valueParser));

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
    }

    catch (error) {
      console.error(['TaskEdit:onSave:error'], error);
    }
  };

  updateFieldsValue = (fieldId, value) => {
    console.log(['updateFieldsValue'], fieldId, value);
    const ids = Array.isArray(fieldId) ? fieldId : [fieldId];
    const values = Array.isArray(value) ? value : [value];
    const fieldsUpdates = ids.reduce((acc, id, index) => {
      const fieldIndex = this.state.fields.findIndex(field => field.fieldId === id);

      return {
        ...acc,
        [fieldIndex]: {
          value: {
            $set: values[index],
          }
        }
      };
    }, {});


    console.log(['fieldsUpdates'], fieldsUpdates);

    this.setState(update(this.state, {
      fields: {
        ...fieldsUpdates,
      }
    }));
  };

  render() {
    console.log(['TaskFragment:render'], this.props, this.state);
    const { editMode } = this.props;

    return editMode ? (
      <TaskEdit {...editHandler(this.state, this.updateFieldsValue, { onSave: this.onSave })} />
    )  : (
      <TaskDetails data={this.state} />
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
        format
        helperText
        label
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
            required
          }
          ... on NumberMetaType {
            required
            min
            max
          }
          ... on MultipleChoiceWithParentType {
            defaultValue
            optionsSet {
              customValueOptionMask
              parentValue
              options {
                text
                value
              }
              parentValue
            }
            parentId
          }
          ... on TextMetaType {
            required
            minLen
            maxLen
          }
        }
        order
        type
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

