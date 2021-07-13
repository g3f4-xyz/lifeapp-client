import React from 'react';
import Switch from '../../../display/field/Switch';
import { useSwitchFieldFragment$key } from './__generated__/useSwitchFieldFragment.graphql';
import useSwitchFieldFragment from './useSwitchFieldFragment';
import useUpdateTaskFieldMutation from './useUpdateTaskFieldMutation';

export default function SwitchField(props: { data: useSwitchFieldFragment$key; taskId: string }) {
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
}
