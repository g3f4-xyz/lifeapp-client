import React, { FC } from 'react';
import useUpdateTaskFieldMutation from './useUpdateTaskFieldMutation';
import Switch from '../../../display/field/Switch';
import { useSwitchFieldFragment$ref } from './__generated__/useSwitchFieldFragment.graphql';
import useSwitchFieldFragment from './useSwitchFieldFragment';

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
  const mutate = useUpdateTaskFieldMutation(id);

  const handleChange = async (enabled: boolean): Promise<void> => {
    await mutate({ fieldId, value: { enabled }, taskId: props.taskId });
  };

  return <Switch disabled={disabled} checked={enabled} label={label} onChange={handleChange} />;
};

export default SwitchField;
