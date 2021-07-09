import React, { FC, useContext } from 'react';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Text from '../../../display/field/Text';
import RelayEnvironmentContext from '../../../../contexts/RelayEnvironmentContext';
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
  const { max, maxLength, min, minLength, required, inputType, label, helperText } = meta;
  const environment = useContext(RelayEnvironmentContext);
  const handleChange = async (text: string): Promise<void> => {
    await updateTaskFieldMutation(
      { fieldId, value: { text }, taskId: props.taskId },
      { id },
      environment,
    );
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
