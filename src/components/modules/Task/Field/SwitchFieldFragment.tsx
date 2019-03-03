// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskSwitchFieldMutation from '../../../../mutations/updateTaskSwitchFieldMutation';
import Switch from '../../../display/field/Switch';
import { SwitchFieldFragment } from './__generated__/SwitchFieldFragment.graphql';

interface Props {
  data: SwitchFieldFragment;
  taskId: string;
}

class SwitchField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { value: { enabled }, meta: { label } } = data;

    return (
      <Switch
        checked={enabled}
        label={label}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = async (enabled: boolean): Promise<void> => {
    const { taskId, data: { id }} = this.props;

    await updateTaskSwitchFieldMutation({ fieldId: id, fieldValue: { enabled }, taskId });
  };
}

// tslint:disable-next-line:no-unused-expression
graphql`
  fragment SwitchFieldFragmentMeta on SwitchMetaType {
    fieldType
    label
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
