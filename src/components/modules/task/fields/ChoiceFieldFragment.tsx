import React from 'react';
import Choice from '../../../display/field/Choice';
import { useChoiceFieldFragment$key } from './__generated__/useChoiceFieldFragment.graphql';
import useChoiceFieldFragment from './useChoiceFieldFragment';
import useUpdateTaskFieldMutation from './useUpdateTaskFieldMutation';

export default function ChoiceField(props: { data: useChoiceFieldFragment$key; taskId: string }) {
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
}
