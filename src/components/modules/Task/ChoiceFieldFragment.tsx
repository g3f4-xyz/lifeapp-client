import { FormHelperText, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent, Fragment } from 'react';
import { createFragmentContainer } from 'react-relay';
import updateTaskChoiceFieldMutation from '../../../mutations/updateTaskChoiceFieldMutation';
import { ChoiceFieldFragment } from './__generated__/ChoiceFieldFragment.graphql';

interface Props {
  data: ChoiceFieldFragment;
  taskId: string;
}

class ChoiceField extends React.Component<Props> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { fieldId, label, helperText, value: { id }, meta: { options } } = data;

    return (
      <Fragment>
        <InputLabel htmlFor={fieldId}>{label}</InputLabel>
        <Select
          value={id}
          onChange={this.handleChange}
          input={<Input name={fieldId} id={fieldId} />}
        >
          {options && options.map((option) => option && (
            <MenuItem
              key={option.value}
              value={option.value}
            >{option.text}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </Fragment>
    );
  }

  private handleChange = async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    const { taskId, data: { id }} = this.props;

    await updateTaskChoiceFieldMutation({ fieldId: id, fieldValue: { id: event.target.value }, taskId });
  };
}

export default createFragmentContainer<Props>(
  // @ts-ignore
  ChoiceField,
  graphql`
    fragment ChoiceFieldFragment on FieldType {
      id
      fieldId
      helperText
      label
      meta {
        ... on ChoiceMetaType {
          defaultValue
          options {
            text
            value
          }
          required
        }
      }
      value {
        ... on ChoiceValueType {
          id
        }
      }
    }
  `,
);
