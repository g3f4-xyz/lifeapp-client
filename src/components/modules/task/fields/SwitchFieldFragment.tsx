import React, { FC, useContext } from 'react';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Switch from '../../../display/field/Switch';
import RelayEnvironmentContext from '../../../../contexts/RelayEnvironmentContext';
import useSwitchFieldFragment from './useSwitchFieldFragment';
import { useSwitchFieldFragment$ref } from './__generated__/useSwitchFieldFragment.graphql';

interface SwitchFieldProps {
  data: useSwitchFieldFragment$ref;
  taskId: string;
}

const SwitchField: FC<SwitchFieldProps> = props => {
  const {
    id,
    fieldId,
    value: { enabled },
    meta: { label, disabled },
  } = useSwitchFieldFragment(props.data);
  const environment = useContext(RelayEnvironmentContext);

  const handleChange = async (enabled: boolean): Promise<void> => {
    await updateTaskFieldMutation(
      { fieldId, value: { enabled }, taskId: props.taskId },
      { id },
      environment,
    );
  };

  return <Switch disabled={disabled} checked={enabled} label={label} onChange={handleChange} />;
};

export default SwitchField;
