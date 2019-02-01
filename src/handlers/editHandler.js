import { FIELD_FORMATS } from '../constans';

export default (data, update, { onSave }) => {
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
        parentID,
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
      const { value: { id: parentValue }, label: parentLabel } = getField(parentID);

      return {
        ids,
        optionsSet,
        defaultValue,
        parentLabel,
        parentValue,
        customValueOptionValue,
        onChange: ({ target: { value }}, { isCustomOptionValueUpdate = false } = {}) => {
          console.log(['editHandler.MULTIPLE_CHOICE_WITH_PARENT.onChange'], { ids, fieldId, value, isCustomOptionValueUpdate });
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
};
