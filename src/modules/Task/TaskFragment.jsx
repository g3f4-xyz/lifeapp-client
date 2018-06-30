import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import update from 'immutability-helper';
import TaskDetails from './TaskDetails';
import TaskEdit from './TaskEdit';
import saveTaskMutation from '../../mutations/saveTask';
import { FIELD_FORMATS } from '../../constans';

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

  editHandler(data, update, { onSave }) {
    const mapFields = field => {
      const {
        fieldId,
        format,
        type,
        label,
        order,
        meta: {
          defaultValue,
          options,
          optionsSet,
          parentId,
        },
        value: {
          bool,
          customValueOptionValue,
          id,
          ids,
          number,
          text,
        }
      } = field;
      const commonProps = {
        format,
        id: fieldId,
        label,
        order,
      };
      const getField = id => data.fields.find(({ fieldId }) => fieldId === id);

      if (fieldId === 'CYCLE') {
        return {
          options,
          value: id,
          onChange: ({ target: { value }}) => {
            console.log(['editHandler.CYCLE.onChange'], fieldId, value);
            update([fieldId, 'WHEN'], [
              {
                id: value,
              },
              {
                ids: [],
              },
            ]);
          },
          ...commonProps,
        }
      }
      else if (format === FIELD_FORMATS.BOOL) {
        return {
          checked: bool,
          value: fieldId,
          onChange: ({ target: { value }}, alternativeValue) => {
            console.log(['editHandler.BOOL.onChange'], fieldId, value, alternativeValue);
            update(fieldId, {
              bool: alternativeValue,
            });
          },
          ...commonProps,
        }
      }
      else if (format === FIELD_FORMATS.CHOICE) {
        return {
          options,
          value: id,
          onChange: ({ target: { value }}) => {
            console.log(['editHandler.CHOICE.onChange'], fieldId, value);
            update(fieldId, {
              id: value,
            });
          },
          ...commonProps,
        }
      }
      else if (format === FIELD_FORMATS.MULTIPLE_CHOICE_WITH_PARENT) {
        const { value: { id: parentValue }, label: parentLabel } = getField(parentId);

        return {
          ids,
          optionsSet,
          defaultValue,
          parentLabel,
          parentValue,
          customValueOptionValue,
          onChange: ({ target: { value }}, { isCustomOptionValueUpdate = false } = {}) => {
            console.log(['editHandler.MULTIPLE_CHOICE_WITH_PARENT.onChange'], { fieldId, value, isCustomOptionValueUpdate });
            update(fieldId, {
              customValueOptionValue: isCustomOptionValueUpdate ? value : customValueOptionValue,
              ids: isCustomOptionValueUpdate ? ids : value,
              parentValue,
            });
          },
          ...commonProps,
        }
      }
      else if (format === FIELD_FORMATS.NUMBER) {
        return {
          value: number,
          onChange: ({ target: { value }}) => {
            console.log(['editHandler.NUMBER.onChange'], fieldId, value);
            update(fieldId, {
              number: value,
            });
          },
          ...commonProps,
        }
      }
      else if (format === FIELD_FORMATS.TEXT) {
        return {
          type,
          value: text,
          onChange: ({ target: { value }}) => {
            console.log(['editHandler.TEXT.onChange'], fieldId, value);
            update(fieldId, {
              text: value,
            });
          },
          ...commonProps,

        }
      }

      return commonProps;
    };

    return {
      fields: data.fields.map(mapFields),
      taskType: data.taskType,
      onSave,
    }
  }

  render() {
    console.log(['TaskFragment:render'], this.props, this.state);
    const { editMode } = this.props;

    return editMode ? (
      <TaskEdit {...this.editHandler(this.state, this.updateFieldsValue, { onSave: this.onSave })} />
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

