import { TextField as Input } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskChoiceFieldMutation from '../../../mutations/__generated__/updateTaskChoiceFieldMutation.graphql';
import updateTaskTextFieldMutation from '../../../mutations/updateTaskTextFieldMutation';
import { TextFieldFragment } from './__generated__/TextFieldFragment.graphql';

interface Props {
  data: TextFieldFragment;
  taskId: string;
}

class TextField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { fieldId, label, helperText, value: { text } } = data;

    return (
      <Input
        id={fieldId}
        label={label}
        InputLabelProps={{
          shrink: true,
        }}
        helperText={helperText}
        fullWidth
        value={text ? text : undefined}
        onChange={this.handleChange}
      />
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
      helperText
      label
      format
      meta {
        ... on TextMetaType {
          maxLen
          minLen
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
