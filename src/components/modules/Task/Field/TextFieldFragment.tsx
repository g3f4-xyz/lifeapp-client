// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskTextFieldMutation from '../../../../mutations/updateTaskTextFieldMutation';
import Text from '../../../display/Text';
import { TextFieldFragment } from './__generated__/TextFieldFragment.graphql';

interface Props {
  data: TextFieldFragment;
  taskId: string;
}

class TextField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;

    const { value: { text }, meta } = data;
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
    const { taskId, data: { id }} = this.props;

    await updateTaskTextFieldMutation({ fieldId: id, fieldValue: { text }, taskId });
  };
}

const TextMetaFragment = graphql`
  fragment TextFieldFragmentMeta on TextMetaType {
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

export default createFragmentContainer<Props>(
  // @ts-ignore
  TextField,
  graphql`
    fragment TextFieldFragment on FieldType {
      id
      fieldId
      meta {
        ...TextFieldFragmentMeta @relay(mask: false)
      }
      value {
        ... on TextValueType {
          text
        }
      }
    }
  `,
);
