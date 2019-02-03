import { FIELD_FORMATS } from '../constans';

export default (data: any, update: any, { onSave }: any): any => {
  const mapFields = (field: any) => {
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
      },
    } = field;
    const commonProps = {
      format,
      id: fieldId,
      label,
      order,
    };
    const getField = (id: any): any => data.fields.find(({ fieldId }: any): any => fieldId === id);

    if (fieldId === 'CYCLE') {
      return {
        options,
        value: id,
        onChange: ({ target: { value }}: any) => {
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
      };
    } else if (format === FIELD_FORMATS.BOOL) {
      return {
        checked: bool,
        value: fieldId,
        onChange: ({ target: { value }}: any, alternativeValue: any): any => {
          update(fieldId, {
            bool: alternativeValue,
          });
        },
        ...commonProps,
      };
    } else if (format === FIELD_FORMATS.CHOICE) {
      return {
        options,
        value: id,
        onChange: ({ target: { value }}: any): any => {
          update(fieldId, {
            id: value,
          });
        },
        ...commonProps,
      };
    } else if (format === FIELD_FORMATS.MULTIPLE_CHOICE_WITH_PARENT) {
      const { value: { id: parentValue }, label: parentLabel } = getField(parentID);

      return {
        ids,
        optionsSet,
        defaultValue,
        parentLabel,
        parentValue,
        customValueOptionValue,
        onChange: ({ target: { value }}: any, { isCustomOptionValueUpdate = false }: any = {}): any => {
          update(fieldId, {
            customValueOptionValue: isCustomOptionValueUpdate ? value : customValueOptionValue,
            ids: isCustomOptionValueUpdate ? ids : value,
            parentValue,
          });
        },
        ...commonProps,
      };
    } else if (format === FIELD_FORMATS.NUMBER) {
      return {
        value: number,
        onChange: ({ target: { value }}: any): any => {
          update(fieldId, {
            number: value,
          });
        },
        ...commonProps,
      };
    } else if (format === FIELD_FORMATS.TEXT) {
      return {
        type,
        value: text,
        onChange: ({ target: { value }}: any): any => {
          update(fieldId, {
            text: value,
          });
        },
        ...commonProps,

      };
    }

    return commonProps;
  };

  return {
    fields: data.fields.map(mapFields),
    taskType: data.taskType,
    onSave,
  };
};
