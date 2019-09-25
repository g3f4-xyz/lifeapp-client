import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Switch from '../../../display/field/Switch';
// eslint-disable-next-line @typescript-eslint/camelcase
import { SwitchFieldFragment_data } from './__generated__/SwitchFieldFragment_data.graphql';

interface Props {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: SwitchFieldFragment_data;
  taskId: string;
}

class SwitchField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const {
      value: { enabled },
      meta: { label, disabled },
    } = data;

    return <Switch disabled={disabled} checked={enabled} label={label} onChange={this.handleChange} />;
  }

  private handleChange = async (enabled: boolean): Promise<void> => {
    const {
      taskId,
      data: { fieldId, id },
    } = this.props;

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

export default createFragmentContainer<Props>(SwitchField, {
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
