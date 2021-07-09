import React, { FC } from 'react';
import useUpdateTaskFieldMutation from './useUpdateTaskFieldMutation';
import Text from '../../../display/field/Text';
import { useTextFieldFragment$ref } from './__generated__/useTextFieldFragment.graphql';
import useTextFieldFragment from './useTextFieldFragment';

interface TextFieldProps {
  data: useTextFieldFragment$ref;
  taskId: string;
}

const TextField: FC<TextFieldProps> = props => {
  const {
    id,
    fieldId,
    value: { text },
    meta,
  } = useTextFieldFragment(props.data);
  const mutate = useUpdateTaskFieldMutation(id);
  const { max, maxLength, min, minLength, required, inputType, label, helperText } = meta;
  const handleChange = async (text: string) => {
    await mutate({ fieldId, value: { text }, taskId: props.taskId });
  };

  return (
    <Text
      value={text}
      label={label}
      helperText={helperText}
      max={max || undefined}
      min={min || undefined}
      minLength={minLength || undefined}
      maxLength={maxLength || undefined}
      required={required}
      inputType={inputType || undefined}
      onChange={handleChange}
    />
  );
};

export default TextField;
