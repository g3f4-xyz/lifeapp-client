import graphql from 'babel-plugin-relay/macro';
import React, { FC, useContext } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Switch from '../../../display/field/Switch';
// eslint-disable-next-line @typescript-eslint/camelcase
import { SwitchFieldFragment_data } from './__generated__/SwitchFieldFragment_data.graphql';
import RelayEnvironmentContext from '../../../../contexts/RelayEnvironmentContext';

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
  const environment = useContext(RelayEnvironmentContext);

  const handleChange = async (enabled: boolean): Promise<void> => {
    const {
      taskId,
      data: { fieldId, id },
    } = props;

    await updateTaskFieldMutation({ fieldId, value: { enabled }, taskId }, { id }, environment);
  };

  return <Switch disabled={disabled} checked={enabled} label={label} onChange={handleChange} />;
};

graphql`
  fragment SwitchFieldFragmentMeta on SwitchFieldMeta {
    fieldType
    label
    disabled
    required
  }
`;

graphql`
  fragment SwitchFieldFragmentValue on SwitchFieldValue {
    enabled
  }
`;

export default createFragmentContainer<SwitchFieldProps>(SwitchField, {
  data: graphql`
    fragment SwitchFieldFragment_data on Field {
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
