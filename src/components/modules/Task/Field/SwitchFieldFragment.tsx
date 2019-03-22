// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Switch from '../../../display/field/Switch';
import { SwitchFieldFragment } from './__generated__/SwitchFieldFragment.graphql';

interface Props {
  data: SwitchFieldFragment;
  taskId: string;
}

class SwitchField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { value: { enabled }, meta: { label, disabled } } = data;

    return (
      <Switch
        disabled={disabled}
        checked={enabled}
        label={label}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = async (enabled: boolean): Promise<void> => {
    const { taskId, data: { fieldId, id }} = this.props;

    await updateTaskFieldMutation({ fieldId, value: { enabled }, taskId }, { id });
  };
}

// tslint:disable-next-line:no-unused-expression
graphql`
  fragment SwitchFieldFragmentMeta on SwitchMetaType {
    fieldType
    label
    disabled
    required
  }
`;
// tslint:disable-next-line:no-unused-expression
graphql`
  fragment SwitchFieldFragmentValue on SwitchValueType {
    enabled
  }
`;

export default createFragmentContainer<Props>(
  // @ts-ignore
  SwitchField,
  graphql`
    fragment SwitchFieldFragment on FieldType {
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
);
