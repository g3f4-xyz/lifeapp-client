import { ChangeEvent } from 'react';
import { TaskFragment, TaskTypeEnum } from '../components/modules/Task/__generated__/TaskFragment.graphql';
import { Field, FieldValue } from '../components/modules/Task/TaskFragment';
import { FIELD_FORMATS } from '../constans';

export type FieldProps = Partial<{
  readonly id?: string | null;
  readonly type?: string | null;
  readonly label?: string | null;
  readonly order?: number | null;
  readonly format?: string | null;
  readonly options?: ReadonlyArray<({
    readonly text: string;
    readonly value: string;
  }) | null>;
  readonly value?: string | null;
  readonly optionsSet?: ReadonlyArray<({
    readonly customValueOptionMask: string;
    readonly parentValue: string;
    readonly options: ReadonlyArray<({
      readonly text: string;
      readonly value: string;
    }) | null> | null;
  }) | null>;
  readonly defaultValue?: string | null;
  readonly parentLabel?: string | null;
  readonly parentValue?: string | null;
  readonly customValueOptionValue?: string | null;
  readonly checked?: boolean | null;
  readonly ids?: ReadonlyArray<string | null>;
  onChange(
    { target: { value }}: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    alternativeValue: boolean | { isCustomOptionValueUpdate: boolean },
  ): void;
}>;

export interface EditHandlerProps {
  fields: ReadonlyArray<FieldProps>;
  taskType: TaskTypeEnum;
  onSave(): void;
}

export default (
  data: TaskFragment,
  update: (fieldId: string | string[], value: FieldValue | FieldValue[]) => void,
  { onSave }: { onSave(): void },
): EditHandlerProps => {
  const mapFieldToProps = (field: Field): FieldProps => {
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
    const getField = (parentId: string) => data.fields.find((f) => f.fieldId === parentId);

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
    fields: data.fields.map((field: Field) => mapFieldToProps(field)),
    taskType: data.taskType,
    onSave,
  };
};
