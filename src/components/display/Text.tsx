import { TextField as Input } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskTextFieldMutation from '../../../mutations/updateTaskTextFieldMutation';
import FieldContainer from '../../containers/FieldContainer';
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
      <FieldContainer>
        <Input
          label={label}
          required={required}
          InputLabelProps={{ shrink: true }}
          inputProps={{ type: inputType, max, maxLength, min, minLength }}
          helperText={helperText}
          value={text && text.length > 0 ? text : undefined}
          onChange={this.handleChange}
        />
      </FieldContainer>
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { taskId, data: { id }} = this.props;

    await updateTaskTextFieldMutation({ fieldId: id, fieldValue: { text: event.target.value }, taskId });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  TextField,
  graphql`
    fragment TextFieldFragment on FieldType {
      id
      fieldId
      meta {
        ... on TextMetaType {
          helperText
          label
          inputType
          min
          max
          maxLength
          minLength
          required
        }
      }
      value {
        ... on TextValueType {
          text
        }
      }
    }
  `,
);
