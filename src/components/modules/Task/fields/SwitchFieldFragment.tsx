import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Switch from '../../../display/field/Switch';
// eslint-disable-next-line @typescript-eslint/camelcase
import { SwitchFieldFragment_data } from './__generated__/SwitchFieldFragment_data.graphql';

interface SwitchFieldProps {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: SwitchFieldFragment_data;
  taskId: string;
}

const SwitchField: FC<SwitchFieldProps> = props => {
  const { data } = props;
  const {
    value: { enabled },
    meta: { label, disabled },
  } = data;

  const handleChange = async (enabled: boolean): Promise<void> => {
    const {
      taskId,
      data: { fieldId, id },
    } = props;

    await updateTaskFieldMutation({ fieldId, value: { enabled }, taskId }, { id });
  };

  return <Switch disabled={disabled} checked={enabled} label={label} onChange={handleChange} />;
};

graphql`
  fragment SwitchFieldFragmentMeta on SwitchMetaType {
    fieldType
    label
    disabled
    required
  }
`;

graphql`
  fragment SwitchFieldFragmentValue on SwitchValueType {
    enabled
  }
`;

export default createFragmentContainer<SwitchFieldProps>(SwitchField, {
  data: graphql`
    fragment SwitchFieldFragment_data on SwitchFieldType {
      id
      fieldId
      meta {
        ...SwitchFieldFragmentMeta @relay(mask: false)
      }
      value {
        ...SwitchFieldFragmentValue @relay(mask: false)
      }
    }
  `,
});
