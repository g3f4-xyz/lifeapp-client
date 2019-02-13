import { ChangeEvent } from 'react';
import { TaskTypeEnum } from '../components/modules/Task/__generated__/TaskFragment.graphql';
import { FIELD_FORMATS } from '../constans';

export interface EditHandlerProps {
  fields: any[];
  taskType: TaskTypeEnum;
  onSave(): void;
}

export default (
  data: any,
  update: (fieldId: string | string[], value: any | any[]) => void,
  { onSave }: { onSave(): void },
): EditHandlerProps => {
  const mapFieldToProps = (field: any): any => {
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
        text,
      },
    } = field;
    const commonProps = {
      format,
      id: fieldId,
      label,
      order,
    };
    const getField = (parentId: string) => data.fields.find((f: any) => f.fieldId === parentId);

    if (fieldId === 'CYCLE' && options) {
      return {
        options,
        value: id,
        onChange: ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
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
        onChange: ({ target: { value }}: ChangeEvent<HTMLInputElement>, alternativeValue: boolean): void => {
          update(fieldId, {
            bool: alternativeValue,
          });
        },
        ...commonProps,
      };
    } else if (format === FIELD_FORMATS.CHOICE && options) {
      return {
        options,
        value: id,
        onChange: ({ target: { value }}: ChangeEvent<HTMLSelectElement>): void => {
          update(fieldId, {
            id: value,
          });
        },
        ...commonProps,
      };
    } else if (format === FIELD_FORMATS.MULTIPLE_CHOICE_WITH_PARENT && parentID && ids) {
      const parentField = getField(parentID);

      if (!parentField) {
        throw new Error(`could not find parent field with id: ${parentID}`);
      }

      return {
        ids,
        optionsSet,
        defaultValue,
        parentLabel: parentField.label,
        parentValue: parentField.value.id,
        customValueOptionValue,
        onChange: (
          { target: { value } }: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
          { isCustomOptionValueUpdate = false }: { isCustomOptionValueUpdate: boolean },
        ): void => {
          update(fieldId, {
            customValueOptionValue: isCustomOptionValueUpdate ? value : customValueOptionValue,
            ids: isCustomOptionValueUpdate ? ids : [value],
            parentValue: parentField.value.id,
          });
        },
        ...commonProps,
      };
    } else if (format === FIELD_FORMATS.TEXT) {
      return {
        type,
        value: text,
        onChange: ({ target: { value }}: ChangeEvent<HTMLInputElement>): void => {
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
    fields: data.fields.map((field: any) => mapFieldToProps(field as any)),
    taskType: data.taskType,
    onSave,
  };
};
