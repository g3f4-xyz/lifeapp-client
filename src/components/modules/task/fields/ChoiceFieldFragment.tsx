import React, { FC } from 'react';
import useUpdateTaskFieldMutation from './useUpdateTaskFieldMutation';
import Choice from '../../../display/field/Choice';
import { useChoiceFieldFragment$key } from './__generated__/useChoiceFieldFragment.graphql';
import useChoiceFieldFragment from './useChoiceFieldFragment';

interface ChoiceFieldProps {
  data: useChoiceFieldFragment$key;
  taskId: string;
}

const ChoiceField: FC<ChoiceFieldProps> = (props) => {
  const {
    id: relayId,
    fieldId,
    value: { id },
    meta: { options, label, helperText },
  } = useChoiceFieldFragment(props.data);
  const mutate = useUpdateTaskFieldMutation(relayId);
  const handleChange = async (changedId: string): Promise<void> => {
    await mutate({ fieldId, value: { id: changedId }, taskId: props.taskId });
  };

  return (
    <Choice
      label={label}
      value={id || ''}
      helperText={helperText}
      options={options}
      onChange={handleChange}
    />
  );
};

export default ChoiceField;
