import React, { FC, useContext } from 'react';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Choice from '../../../display/field/Choice';
import RelayEnvironmentContext from '../../../../contexts/RelayEnvironmentContext';
import useChoiceFieldFragment from './useChoiceFieldFragment';
import { useChoiceFieldFragment$ref } from './__generated__/useChoiceFieldFragment.graphql';

interface ChoiceFieldProps {
  data: useChoiceFieldFragment$ref;
  taskId: string;
}

const ChoiceField: FC<ChoiceFieldProps> = props => {
  const {
    id: relayId,
    fieldId,
    value: { id },
    meta: { options, label, helperText },
  } = useChoiceFieldFragment(props.data);
  const environment = useContext(RelayEnvironmentContext);
  const handleChange = async (changedId: string): Promise<void> => {
    await updateTaskFieldMutation(
      { fieldId, value: { id: changedId }, taskId: props.taskId },
      { id: relayId },
      environment,
    );
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
