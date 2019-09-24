import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskFieldMutation from '../../../../mutations/updateTaskFieldMutation';
import Text from '../../../display/field/Text';
// eslint-disable-next-line @typescript-eslint/camelcase
import { TextFieldFragment_data } from './__generated__/TextFieldFragment_data.graphql';

interface Props {
  // eslint-disable-next-line @typescript-eslint/camelcase
  data: TextFieldFragment_data;
  taskId: string;
}

class TextField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;

    const {
      value: { text },
      meta
    } = data;
    const { max, maxLength, min, minLength, required, inputType, label, helperText } = meta;

    return (
      <Text
        value={text}
        label={label}
        helperText={helperText}
        max={max || undefined}
        min={min || undefined}
        minLength={minLength || undefined}
        maxLength={maxLength || undefined}
        required={required}
        inputType={inputType || undefined}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = async (text: string): Promise<void> => {
    const {
      taskId,
      data: { fieldId, id }
    } = this.props;

    await updateTaskFieldMutation({ fieldId, value: { text }, taskId }, { id });
  };
}

// tslint:disable-next-line:no-unused-expression
graphql`
  fragment TextFieldFragmentMeta on TextMetaType {
    fieldType
    helperText
    label
    inputType
    min
    max
    maxLength
    minLength
    required
  }
`;
// tslint:disable-next-line:no-unused-expression
graphql`
  fragment TextFieldFragmentValue on TextValueType {
    text
  }
`;

export default createFragmentContainer<Props>(TextField, {
  data: graphql`
    fragment TextFieldFragment_data on TextFieldType {
      id
      fieldId
      meta {
        ...TextFieldFragmentMeta @relay(mask: false)
      }
      value {
        ...TextFieldFragmentValue @relay(mask: false)
      }
    }
  `
});
